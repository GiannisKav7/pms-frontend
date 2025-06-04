import React from "react";
import styles from "./DatePicker.module.css";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  
}

const DatePicker: React.FC<DatePickerProps> = ({ label, id, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        className={`${styles.input} ${props.readOnly ? styles.readOnly : ""}`}
        {...props}
      />
    </div>
  );
};

export default DatePicker;
