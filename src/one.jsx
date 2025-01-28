import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const inter = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(inter);  
  }, []);

  function format() {
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridian = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return `${hrs}:${min}:${sec} ${meridian}`;
  }

  return (
    <>
      <div className="time">
        <div className="white">{format()}</div>
        <div className="red">{format()}</div>
        <div className="blue">{format()}</div>
      </div>
    </>
  );
}

export default App;