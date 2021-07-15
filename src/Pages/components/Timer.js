import React, { useEffect, useState } from "react";

export default function Timer() {
  const calculateTimeLeft = () => {
    //let year = new Date().getFullYear();
    let nextday = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + 3
    );
    const difference = +nextday - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer">
      <div className="d-flex justify-content-between">
        <div className="text-center">
          <p className="">{timeLeft.days}</p>
          <h5>DAYS</h5>
        </div>
        <div className="sep">:</div>
        <div className="text-center">
          <p className="">{timeLeft.hours}</p>
          <h5>HOURS</h5>
        </div>
        <div className="sep">:</div>
        <div className="text-center">
          <p>{timeLeft.minutes}</p>
          <h5>MINUTES</h5>
        </div>
        <div className="sep">:</div>
        <div className="text-center">
          <p>{timeLeft.seconds}</p>
          <h5>SECONDS</h5>
        </div>
      </div>
{/*       <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="text-center">DAYS</h5>
        </div>
        <div>
          <h5 className="text-center">HOURS</h5>
        </div>
        <div className="text-center">
          <h5>MINUTES</h5>
        </div>
        <div className="text-center">
          <h5>SECONDS</h5>
        </div>
      </div> */}
    </div>
  );
}
