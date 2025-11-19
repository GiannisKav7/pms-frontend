import React from "react";
import Radio from "./Radio";
import styles from "./RadioGroup.module.css";

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`${styles.radioGroup} ${className || ""}`}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={(e) => onChange(e.target.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
