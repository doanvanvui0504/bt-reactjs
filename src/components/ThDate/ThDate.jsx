import React, { useEffect, useState } from 'react';

const ThDate = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //   useEffect(() => {
  //     const timeId = setInterval(() => {
  //       setTime((prev) => new Date().toLocaleTimeString());
  //     }, 1000);

  //     return () => {
  //       clearInterval(timeId);
  //     };
  //   }, []);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [time]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {time}</h2>
    </div>
  );
};

export default ThDate;
