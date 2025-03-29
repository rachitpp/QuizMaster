import { createContext, useContext, useEffect, useReducer } from "react";
import { questions } from "../../data/questions";

const QuestionContext = createContext();

const initialState = {
  questions: [],
  statusState: "ready", // ready, active, finished
  QuestionNo: 0,
  answer: null,
  Points: 0,
  TotalMarks: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        statusState: "ready",
        TotalMarks: action.payload.reduce((total, q) => total + q.points, 0),
      };
    case "start":
      return { ...state, statusState: "active" };
    case "answer":
      const question = state.questions[state.QuestionNo];
      const correctAnswer = question.correctOption;
      const points = action.payload === correctAnswer ? question.points : 0;
      return {
        ...state,
        answer: action.payload,
        Points: state.Points + points,
      };
    case "nextQuestion":
      return {
        ...state,
        QuestionNo: state.QuestionNo + 1,
        answer: null,
      };
    case "finish":
      return { ...state, statusState: "finished" };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        statusState: "ready",
        TotalMarks: state.TotalMarks,
      };
    default:
      throw new Error("Unknown action");
  }
};

function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "dataReceived", payload: questions });
  }, []);

  const HandleStart = () => {
    dispatch({ type: "start" });
  };

  const HandleAnswer = (index) => {
    dispatch({ type: "answer", payload: index });
  };

  const HandleNext = () => {
    if (state.QuestionNo === state.questions.length - 1) {
      dispatch({ type: "finish" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  };

  const HandleFinish = () => {
    dispatch({ type: "finish" });
  };

  const HandleRestart = () => {
    dispatch({ type: "restart" });
  };

  return (
    <QuestionContext.Provider
      value={{
        ...state,
        HandleStart,
        HandleAnswer,
        HandleNext,
        HandleFinish,
        HandleRestart,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error("QuestionContext was used outside of QuestionProvider");
  return context;
};

export { QuestionProvider, useQuestion };
