import { useState } from "react";
import Feedback from "./Feedback";
import Statistics from "./Statistics";

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });
  function handleClick(key) {
    return (ev) => setFeedbacks((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  }

  return (
    <div className="App">
      <Feedback handler={handleClick} />
      <Statistics feedbacks={feedbacks} />
    </div>
  );
}

export default App;
