import React from "react";
import styles from "./NumberWithPostfix.module.css";

interface NumberWithPostfixProps extends React.InputHTMLAttributes<HTMLInputElement>{
  
  postfix: string;
  readOnly?: boolean;
  label?: string;
  id?: string;
}

const NumberWithPostfix: React.FC<NumberWithPostfixProps> = ({
  postfix,
  readOnly,
  label,
  id,
  ...props
}) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const num = parseFloat(e.target.value);
//     if (!isNaN(num) && onChange) {
//       onChange(num);
//     }
//   };

  return (
    <div className={styles.container}>
        {label && (
            <label htmlFor={id} className={styles.label}>
            {label}
            </label>
        )}
        <div
        className={`${styles.wrapper} ${readOnly ? styles.readOnly : ""}`}>        
        <input
            type="number"
            id={id}
            className={`${styles.input} ${readOnly ? styles.readOnly : ""}`}
            readOnly={readOnly}
            {...props}
        />
        <span className={styles.postfix}>
            {postfix}
        </span>
        </div>
    </div>
  );
};

export default NumberWithPostfix;
