import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`${styles.input} ${props.readOnly ? styles.readOnly : ""}`}
        {...props}
      />
    </div>
  );
};

export default Input;

