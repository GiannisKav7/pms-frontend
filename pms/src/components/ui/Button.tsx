import React from "react";
// import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button: React.FC<ButtonProps> = ({ color, children, ...props }) => {
  return <button style={{ color: color }}>{children}</button>;
};

export default Button;
