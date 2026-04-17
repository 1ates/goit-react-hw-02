import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    try {
      const savedFeedback = window.localStorage.getItem("saved-feedback");
      if (savedFeedback !== null) {
        return JSON.parse(savedFeedback);
      }
      return { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      console.log("localStorage 'getting' error: ", error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // const updateFeedback = (feedbackType) => {
  //   if (feedbackType === "good") {
  //     setFeedback({
  //       ...feedback,
  //       good: feedback.good + 1,
  //     });
  //   } else if (feedbackType === "neutral") {
  //     setFeedback({
  //       ...feedback,
  //       neutral: feedback.neutral + 1,
  //     });
  //   } else if (feedbackType === "bad") {
  //     setFeedback({
  //       ...feedback,
  //       bad: feedback.bad + 1,
  //     });
  //   }
  // };

  const updateFeedback = (feedbackType) => {
    setFeedback((data) => ({ ...data, [feedbackType]: data[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    try {
      window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
    } catch (error) {
      console.log("localStorage 'setting' error: ", error);
      alert("Your data cannot be stored in local storage.");
    }
  }, [feedback]);

  return (
    <>
      <section className={styles.center}>
        <Description />
        <div className={styles.btnContainer}>
          <Options update={updateFeedback} total={totalFeedback} reset={resetFeedback} />
        </div>
      </section>

      <section className={styles.feedback}>
        {totalFeedback > 0 ? <Feedback value={feedback} total={totalFeedback} /> : <Notification />}
      </section>
    </>
  );
}

export default App;
