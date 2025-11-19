import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  background?: "light" | "dark" | "none";
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, background = "none", className }) => {
  const backgroundClass =
    background === "light"
      ? styles.light
      : background === "dark"
      ? styles.dark
      : "";

  return (
    <section className={`${styles.section} ${backgroundClass} ${className || ""}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

export default Section;
