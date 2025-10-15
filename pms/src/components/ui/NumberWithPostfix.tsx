import React from "react";
import styles from "./NumberWithPostfix.module.css";

interface NumberWithPostfixProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  postfix?: string;
  readOnly?: boolean;
  label?: string;
  id?: string;
  className?: string;
}

const NumberWithPostfix: React.FC<NumberWithPostfixProps> = ({
  postfix = "",
  readOnly,
  label,
  id,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={`${styles.wrapper} ${readOnly ? styles.readOnly : ""}`}>
        <input
          type="number"
          id={id}
          className={`${styles.input} ${readOnly ? styles.readOnly : ""}`}
          readOnly={readOnly}
          {...props}
        />
        <span className={`${styles.postfix}${readOnly ? styles.readOnly : ""}`}>
          {postfix}
        </span>
      </div>
    </div>
  );
};

export default NumberWithPostfix;
