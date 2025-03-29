import { useQuestion } from "../Context/context";
import Options from "./Options";

const Questions = () => {
  const { questions, HandleQuestionNext, QuestionNo, answer } = useQuestion();

  return (
    <div className="app">
      <div className="questions">
        <div className="progress-indicator">
          {QuestionNo + 1} of {questions.length}
        </div>

        <h2 className="question-text">{questions[QuestionNo].question}</h2>

        <Options />

        <div className="progress-dots">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === QuestionNo ? "active" : ""}`}
            />
          ))}
        </div>

        <button className="btn btn-back">Back</button>
      </div>

      <div className="title">
        <h1>REACT QUIZ</h1>
        <p className="subtitle">Test your React knowledge</p>
      </div>
    </div>
  );
};

export default Questions;
