import React from "react";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  link?: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, link, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {link && props.readOnly ? <a className={`${styles.input} ${styles.readOnly} ${styles.link}`} href="www.google.com"><span  {...props}>{props.value}</span></a>:<input 
        id={id}
        className={`${styles.input} ${props.readOnly ? styles.readOnly : ""}`}
        {...props}
      />}
      
    </div>
  );
};

export default Input;

