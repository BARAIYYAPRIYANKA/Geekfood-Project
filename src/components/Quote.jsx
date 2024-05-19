import React, { useEffect, useState } from 'react';

function Quote() {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchQuotes() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setApiData(result);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className='pt-20'>
      {error ? (
        <div className='text-red-500'>{error}</div>
      ) : (
        apiData.map((item, idx) => (
          <div key={idx} className='flex flex-col justify-center items-center border p-10 m-10 space-y-6 shadow-md'>
            <h1 className='text-3xl font-bold'>{item.text}</h1>
            <p className="text-gray-600">{item.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Quote;
