import React from "react";
import styles from "./Table.module.css";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.accessor}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
