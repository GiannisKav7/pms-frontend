import React from "react";
import styles from "./Radio.module.css";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: React.FC<RadioProps> = ({ label, className, ...props }) => {
  return (
    <label className={`${styles.radioLabel} ${className || ""}`}>
      <input type="radio" className={styles.radioInput} {...props} />
      <span className={styles.customRadio}></span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default Radio;