import "./App.css";
import { useState, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null); // Use useRef to store the interval ID

  const startTimer = () => {
    if (!timerRef.current) { // Prevent multiple intervals
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Reset ref to indicate the timer has stopped
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(0); // Reset timer to 0
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
