// src/DateTime.js
import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

  return (
    <div>
      {currentDateTime.toLocaleString()}
    </div>
  );
};

export default DateTime;