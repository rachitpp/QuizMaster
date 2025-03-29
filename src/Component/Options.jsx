import { useQuestion } from "../Context/context";

// Icons for different options
const optionIcons = {
  business: "👔",
  design: "🎨",
  development: "💻",
  marketing: "📈",
};

const Options = () => {
  const { questions, QuestionNo, HandleAnswer, answer } = useQuestion();
  const currentQuestion = questions[QuestionNo];

  const handleOptionClick = (index) => {
    if (answer === null) {
      HandleAnswer(index);
    }
  };

  // Determine if an option is correct or incorrect
  const getOptionClass = (index) => {
    if (answer === null) return "";

    const isSelected = answer === index;
    const isCorrect = currentQuestion.correctOption === index;

    if (isSelected) {
      return isCorrect ? "correct" : "incorrect";
    } else if (isCorrect && answer !== null) {
      return "correct"; // Show correct answer even if not selected
    } else if (answer !== null) {
      return "disabled"; // Disable unselected options after answering
    }

    return "";
  };

  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <div
          key={option}
          className={`option-card ${getOptionClass(index)}`}
          onClick={() => handleOptionClick(index)}
        >
          <span className="option-text">{option}</span>
          {getOptionClass(index) === "correct" && (
            <span className="option-icon check">✓</span>
          )}
          {getOptionClass(index) === "incorrect" && (
            <span className="option-icon cross">✗</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Options;
