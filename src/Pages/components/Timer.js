import React, { useEffect, useState, useCallback } from "react";

export default function Timer() {
  const calculateTimeLeft = useCallback(() => {
    const today = new Date();
    const nextday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    const difference = nextday - today;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 / 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  const timeUnits = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className="timer d-flex justify-content-between">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="text-center">
            <p>{unit.value}</p>
            <h5>{unit.label}</h5>
          </div>
          {index < timeUnits.length - 1 && <div className="sep">:</div>}
        </React.Fragment>
      ))}
    </div>
  );
}
