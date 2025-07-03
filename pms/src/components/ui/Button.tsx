import React from "react";
import styles from "./Button.module.css";

type ButtonType = "default" | "success" | "warning" | "error" | "info";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    mode?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ children, mode = "default", className, ...props}) => {
  const combinedStyle = `${styles.button} ${styles[mode]} ${className}`;

  return <button className={combinedStyle} {...props}>{children}</button>;
};

export default Button;
