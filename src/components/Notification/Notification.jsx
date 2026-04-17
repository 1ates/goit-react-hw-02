import styles from "./Notification.module.css";

const Notification = () => {
  return (
    <>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>No feedback yet</li>
        </ul>
      </div>
    </>
  );
};

export default Notification;
