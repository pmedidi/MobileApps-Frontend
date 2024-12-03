import React, { useState } from 'react';

const FetchInfo = () => {
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiEndpoint = 'https://k5mbpvpnld.execute-api.us-east-1.amazonaws.com/prod/fragrances/all';

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setLog((prev) => [...prev, `Fetching data from: ${apiEndpoint}`]);

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      
      // Log the retrieved data
      setLog((prev) => [...prev, 'Data retrieved:', JSON.stringify(data, null, 2)]);
      setLog((prev) => [...prev, `Simulating save to ./data/fragrances.json`]);
    } catch (error) {
      setLog((prev) => [...prev, `Error fetching data: ${error.message}`]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>API Visual Fetch Simulator</h2>
      <button
        onClick={fetchData}
        style={{
          padding: '0.5rem 1rem',
          margin: '1rem 0',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Simulate API Fetch'}
      </button>
      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          textAlign: 'left',
        }}
      >
        <h3>Log Output:</h3>
        {log.length > 0 ? (
          log.map((entry, index) => <div key={index}>{entry}</div>)
        ) : (
          <p>No actions yet. Click the button to simulate fetching data.</p>
        )}
      </div>
    </div>
  );
};

export default FetchInfo;
