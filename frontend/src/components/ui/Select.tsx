import React from "react";
import styles from "./Select.module.css";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ label, options, id, ...props }) => {
  const selectId = id || `select-${Math.random()}`;

  return (
    <div className={styles.selectWrapper}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
        </label>
      )}
      <select id={selectId} className={styles.select} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
