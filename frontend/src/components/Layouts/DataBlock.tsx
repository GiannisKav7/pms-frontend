import React from "react";
import { Link } from "react-router-dom";
import styles from "./DataBlock.module.css";

interface DataBlockProps {
  name: string;
  dataCode: string;
  description?: string;
  link?: string;
  className?: string;
}

const sanitizeId = (s: string) =>
  s
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .toLowerCase();

const DataBlock: React.FC<DataBlockProps> = ({
  name,
  dataCode,
  description,
  link,
  className,
}) => {
  const id = `datablock-${sanitizeId(name)}`;

  const header = (
    <div role="heading" id={id} className={styles.heading}>
      {name}
    </div>
  );

  return (
    <section aria-labelledby={id} className={className ?? styles.wrapper}>
      {link ? (
        <Link to={link} className={styles.link}>
          {header}
        </Link>
      ) : (
        header
      )}

      <pre>{dataCode}</pre>
      {description}
    </section>
  );
};

export default DataBlock;
