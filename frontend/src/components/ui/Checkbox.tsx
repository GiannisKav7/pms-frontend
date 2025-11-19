import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
  const checkboxId = id || `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <label className={styles.wrapper} htmlFor={checkboxId}>
      <input type="checkbox" id={checkboxId} className={styles.checkbox} {...props} />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
