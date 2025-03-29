import { useEffect, useState } from "react";
import { useQuestion } from "../Context/context";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(true);
  const { HandleFinish } = useQuestion();

  // Calculate time progress
  const totalTime = 10 * 60;
  const progress = (timeLeft / totalTime) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // End quiz when timer reaches 0
          HandleFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [HandleFinish]);

  // Pulse effect on second change
  useEffect(() => {
    setIsActive(true);
    const timeout = setTimeout(() => setIsActive(false), 200);
    return () => clearTimeout(timeout);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 60; // Warning when 1 minute or less remains
  const isLowTime = timeLeft <= 180 && !isWarning; // Low time when 3 minutes or less (but not in warning)

  return (
    <div
      className={`timer ${isWarning ? "warning" : ""} ${
        isLowTime ? "low-time" : ""
      } ${isActive ? "tick-pulse" : ""}`}
      style={{ "--progress": `${progress}%` }}
    >
      <span className="timer-icon">⏱</span>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  );
}
