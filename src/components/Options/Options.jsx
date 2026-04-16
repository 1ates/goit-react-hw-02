// import { useState } from "react";
import styles from "./Options.module.css";

const Options = ({ onUpdate, children }) => {
  return (
    <>
      <button className={styles.btn} onClick={onUpdate}>
        {children}
      </button>
    </>
  );
};

export default Options;
