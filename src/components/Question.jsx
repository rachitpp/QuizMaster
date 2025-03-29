import { useQuestion } from "../contexts/QuestionContext";
import Options from "./Options";
import Timer from "./Timer";

export default function Question() {
  const { questions, index } = useQuestion();
  const question = questions[index];

  return (
    <div className="question-container">
      <div className="quiz-info">
        <div className="progress-indicator">
          {index + 1}/{questions.length}
        </div>
        <Timer />
        <div className="progress-dots">
          {questions.map((_, i) => (
            <div key={i} className={`dot ${i === index ? "active" : ""}`} />
          ))}
        </div>
      </div>
      <div className="question-wrapper">
        <p className="question-text">{question.question}</p>
      </div>
      <Options question={question} />
    </div>
  );
}
