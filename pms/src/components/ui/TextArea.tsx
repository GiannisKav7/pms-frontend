import React from "react";
import styles from "./Textarea.module.css";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default Textarea;