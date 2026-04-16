import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setFeedback({
        ...feedback,
        good: feedback.good + 1,
      });
    } else if (feedbackType === "neutral") {
      setFeedback({
        ...feedback,
        neutral: feedback.neutral + 1,
      });
    } else if (feedbackType === "bad") {
      setFeedback({
        ...feedback,
        bad: feedback.bad + 1,
      });
    }
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <section className={styles.center}>
        <Description />
        <div className={styles.btnContainer}>
          <Options onUpdate={() => updateFeedback("good")}>Good</Options>
          <Options onUpdate={() => updateFeedback("neutral")}>Neutral</Options>
          <Options onUpdate={() => updateFeedback("bad")}>Bad</Options>
          {totalFeedback !== 0 ? (
            <Options onUpdate={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>Reset</Options>
          ) : (
            <></>
          )}
        </div>
      </section>

      <section className={styles.feedback}>
        {totalFeedback !== 0 ? (
          <Feedback value={feedback} total={totalFeedback} />
        ) : (
          <div>
            <p>No feedback yet</p>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
