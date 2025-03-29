import { useQuestion } from "../Context/context";
import Options from "../Component/Options";
import Finished from "../Component/Finished";
import Timer from "../components/Timer";

const Quiz = () => {
  const {
    questions,
    QuestionNo,
    statusState,
    HandleStart,
    HandleNext,
    answer,
  } = useQuestion();

  if (statusState === "ready") {
    return (
      <div className="welcome-screen">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
        <h1>The React Quiz</h1>
        <button className="start-button" onClick={HandleStart}>
          Start Quiz
        </button>
      </div>
    );
  }

  if (statusState === "finished") {
    return (
      <div className="app">
        <header className="quiz-header">
          <h1 className="quiz-title">REACT QUIZ</h1>
        </header>
        <Finished />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="quiz-header">
        <h1 className="quiz-title">REACT QUIZ</h1>
        <div className="quiz-info">
          <div className="progress-row">
            <span className="progress-indicator">
              {QuestionNo + 1}/{questions.length}
            </span>
            <div className="progress-dots">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === QuestionNo ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
          <Timer />
        </div>
      </header>

      <div className="question-container">
        <div className="question-wrapper">
          <h2 className="question-text">{questions[QuestionNo].question}</h2>
        </div>
        <Options />
      </div>

      <div className="quiz-footer">
        {answer !== null && (
          <button className="btn-next" onClick={HandleNext}>
            {QuestionNo === questions.length - 1 ? "Finish Quiz" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
