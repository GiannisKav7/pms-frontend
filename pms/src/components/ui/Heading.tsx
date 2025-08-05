import React from "react";
import styles from "./Heading.module.css";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className, ...rest }) => {
  const Tag = `h${level}` as React.ElementType;

  return (
    <Tag className={`${styles.heading} ${className || ""}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
