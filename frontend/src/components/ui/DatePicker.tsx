import React from "react";
import styles from "./DatePicker.module.css";

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  orientation?: 'horizontal' | 'vertical';
}

const DatePicker: React.FC<DatePickerProps> = ({ label, id, orientation = "vertical", ...props }) => {
  return (
    <div className={styles.wrapper + " " + styles[orientation]}>
      {label ? (
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      ) : null}
      <input
        type="date"
        id={id}
        className={styles.input + (props.readOnly ? " " + styles.readOnly : "")}
        value={props.value}
      {...props}
      />
    </div>
  );
};

export default DatePicker;
