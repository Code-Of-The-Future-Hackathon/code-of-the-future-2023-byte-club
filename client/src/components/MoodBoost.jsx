import React, { useEffect, useState } from 'react';

const MoodBoost = () => {
  const [actOfKindness, setActOfKindness] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Fetch a random act of kindness from the server
    getActOfKindness();
  }, []);

  const getActOfKindness = async () => {
    try {
      const response = await fetch('http://localhost:8080/mood');
      const data = await response.json();
      const responseArray = data.response.split('\n')
      console.log(responseArray)

      if (responseArray.length > 0) {
        // Take the first element from the array
        setActOfKindness(responseArray[0]);
        setQuote(responseArray[1]);
      }
    } catch (error) {
      console.error('Error fetching random act of kindness:', error);
    }
  };

  return (
    <div>
      <h2>Act of Kindness:</h2>
      <p>{actOfKindness}</p>

      
      <h2>Quote:</h2>
      <p>{quote}</p>
    </div>
  );
};

export default MoodBoost;
