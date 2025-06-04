import React from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, columns = 5, gap = "16px", className }) => {
  // Set custom CSS properties
  const customStyle = {
    "--grid-columns": columns,
    "--grid-gap": gap,
  } as React.CSSProperties;

  return (
    <div className={`${styles.grid} ${className || ""}`} style={customStyle}>
      {children}
    </div>
  );
};

export default Grid;
