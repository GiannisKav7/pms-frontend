import React from "react";
import styles from "./FormField.module.css";

interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  children,
  error,
  required,
  className,
}) => {
  return (
    <div className={`${styles.formField} ${className || ""}`}>
      {label && (
        <label htmlFor={htmlFor} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>{children}</div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default FormField;
