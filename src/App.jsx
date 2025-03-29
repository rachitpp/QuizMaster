// import DateCounter from "./DateCounter";
import { QuestionProvider } from "./Context/context";
import Quiz from "./MainComponent/Quiz";

function App() {
  return (
    <QuestionProvider>
      <Quiz />
    </QuestionProvider>
  );
}

export default App;
