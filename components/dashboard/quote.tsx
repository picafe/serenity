"use client";

import React, { useEffect, useState } from 'react';

const Quote = () => {

  const apiUrl = "https://zenquotes.io/api/quotes/";
  const interval = 1.2e+6;
  const localStorageKey = 'jsonDataArray'; // Key for storing in localStorage

  const [dataArray, setDataArray] = useState<string[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setDataArray(jsonData); // Store in array
        localStorage.setItem(localStorageKey, JSON.stringify(jsonData)); // Store in localStorage
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
      setDataArray(JSON.parse(storedData));
    }
    else {
        fetchData(); // Fetch data initially
    }
  }, []);

  useEffect(() => {
    
  }, []);
  console.log(dataArray);

  return (
    <div>
      <p> test</p>
      {dataArray.map((data, index) => (
        <li key={index}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </li>
      ))}
    </div>
  );
};

export default Quote;