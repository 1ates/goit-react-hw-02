import styles from "./Options.module.css";

const Options = ({ update, total, reset }) => {
  return (
    <>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => update("good")}>
          Good
        </button>
        <button className={styles.btn} onClick={() => update("neutral")}>
          Neutral
        </button>
        <button className={styles.btn} onClick={() => update("bad")}>
          Bad
        </button>
        {total > 0 && (
          <button className={styles.btn} onClick={reset}>
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Options;
