import { useQuestion } from "../Context/context";

const Finished = () => {
  const { Points, TotalMarks, HandleRestart } = useQuestion();
  const percentage = (Points / TotalMarks) * 100;
  const roundedPercentage = Math.round(percentage);

  let emoji, message;
  if (percentage === 100) {
    emoji = "🏆";
    message = "Perfect Score! You're a React Master!";
  } else if (percentage >= 80) {
    emoji = "🎉";
    message = "Excellent! You really know your React!";
  } else if (percentage >= 60) {
    emoji = "👍";
    message = "Good job! You have solid React knowledge!";
  } else if (percentage >= 40) {
    emoji = "🤔";
    message = "Not bad, but you might need some more practice.";
  } else if (percentage > 0) {
    emoji = "📚";
    message = "Time to review your React fundamentals!";
  } else {
    emoji = "😭";
    message = "Oh no! Better luck next time!";
  }

  return (
    <div className="results-screen">
      <div className="result-card">
        <div className="result-emoji" aria-hidden="true">
          {emoji}
        </div>
        <div className="result-score-container">
          <p className="result">
            You scored <strong>{Points}</strong> out of {TotalMarks}
          </p>
          <div className="result-percentage">
            <span>{roundedPercentage}%</span>
          </div>
        </div>
        <p className="result-message">{message}</p>
        <button className="restart-button" onClick={HandleRestart}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Finished;
