import { useQuestion } from "../Context/context";

const Welcome = () => {
  const { HandleStart } = useQuestion();

  return (
    <div className="welcome-screen">
      <div className="floating-element element-1"></div>
      <div className="floating-element element-2"></div>
      <div className="floating-element element-3"></div>
      <div className="floating-element element-4"></div>
      <div className="floating-element element-5"></div>
      <div className="floating-element element-6"></div>

      <h1>The React Quiz</h1>
      <p className="welcome-subtitle">Master the fundamentals</p>

      <div className="react-logo-container">
        <div className="react-logo-glow"></div>
        <img
          className="react-logo"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
        />
      </div>

      <p className="react-tagline">
        Test your knowledge of the most popular JavaScript library for building
        user interfaces
      </p>

      <button className="start-button" onClick={HandleStart}>
        Start Quiz
      </button>

      <div className="quiz-features">
        <div className="feature-item">
          <span className="feature-icon">🧠</span>
          <span>15 Challenging Questions</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⏱️</span>
          <span>No Time Pressure</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🎯</span>
          <span>Instant Score Analysis</span>
        </div>
      </div>

      <div className="react-version">Built with React 18</div>
    </div>
  );
};

export default Welcome;
