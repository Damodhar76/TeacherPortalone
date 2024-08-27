import React, { useState } from 'react';
import axios from 'axios';

const ShortlistCandidate = ({ appliedJobId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShortlistCandidate = async () => {
    setLoading(true);
    try {
      await axios.post(`http://localhost:9090/api/applied-jobs/${appliedJobId}/shortlist`);
      alert('Candidate shortlisted successfully');
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={handleShortlistCandidate} disabled={loading}>
        {loading ? 'Shortlisting...' : 'Shortlist Candidate'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShortlistCandidate;
