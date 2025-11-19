import React from "react";
import styles from "./FormGroup.module.css";

interface FormGroupProps {
  title?: string;
  horizontal?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  title,
  horizontal,
  children,
  className,
}) => {
  return (
    <div
      className={`${styles.formGroup} ${horizontal ? styles.horizontal : ""} ${
        className || ""
      }`}
    >
      {title && <span className={styles.title}>{title}</span>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FormGroup;
