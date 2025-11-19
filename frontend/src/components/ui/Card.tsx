import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      {title && (
        <>
          <span className={styles.title}>{title}</span>
          <div className={styles.divider}></div>
        </>
      )}
      {children}
    </div>
  );
};

export default Card;
