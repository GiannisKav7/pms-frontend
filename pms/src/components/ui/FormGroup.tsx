import React from "react";
import styles from "./FormGroup.module.css";

interface FormGroupProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ title,children, className }) => {
  return (
    <div className={`${styles.formGroup} ${className || ""}`}>
      <span>{title}</span>
      {children}
    </div>
    
  );
};

export default FormGroup;
