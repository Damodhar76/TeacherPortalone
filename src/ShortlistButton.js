import React, { useState } from "react";
import axios from "axios";

const ShortlistButton = ({ appliedJobId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleShortlistCandidate = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(
        `http://localhost:9090/api/applied-jobs/${appliedJobId}/shortlist`
      );
      setSuccessMessage(response.data);
    } catch (error) {
      setError("Error shortlisting candidate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShortlistCandidate} disabled={loading}>
        {loading ? "Shortlisting..." : "Shortlist"}
      </button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default ShortlistButton;
