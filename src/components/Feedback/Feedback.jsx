import styles from "./Feedback.module.css";

const Feedback = ({ value, total }) => {
  const positiveFeedback = Math.round(((value.good + value.neutral) / total) * 100);

  return (
    <>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Good: </li>
          <li>{value.good}</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Neutral: </li>
          <li>{value.neutral}</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Bad: </li>
          <li>{value.bad}</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Total: </li>
          <li>{total}</li>
        </ul>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Positive: </li>
          <li>{positiveFeedback ? positiveFeedback : 0}%</li>
        </ul>
      </div>
    </>
  );
};

export default Feedback;
