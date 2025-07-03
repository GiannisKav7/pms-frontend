import React from "react";
import styles from "./Input.module.css";
import { Link } from "react-router-dom";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  link?: boolean;
  path?: string;
}

const Input: React.FC<InputProps> = ({ label, id, link, path, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {link && props.readOnly ? 
        <Link to={path ?? "#"} className={`${styles.input} ${styles.readOnly} ${styles.link}`} >
          <span  {...props}>{props.value}</span>
        </Link>:
        <input 
          id={id}
          className={`${styles.input} ${props.readOnly ? styles.readOnly : ""}`}
          {...props}
        />
      }
      
    </div>
  );
};

export default Input;

