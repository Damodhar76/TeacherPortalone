import React, { useState } from 'react';
import axios from 'axios';

const SelectCandidate = ({ appliedJobId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSelectCandidate = async () => {
    setLoading(true);
    try {
      await axios.post(`http://localhost:9090/api/applied-jobs/${appliedJobId}/select`);
      alert('Candidate selected successfully');
    } catch (error) {
      setError('Error selecting candidate: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleSelectCandidate} disabled={loading}>
        {loading ? 'Selecting...' : 'Selected'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SelectCandidate;
