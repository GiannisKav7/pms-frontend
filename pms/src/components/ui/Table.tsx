import React from "react";
import styles from "./Table.module.css";

interface Column {
  header: string;
  accessor: string;
  render?: (row: number, value: string) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  caption?: string;
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, caption, data }) => {
  return (
    <div>
      <caption>{caption}</caption>
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
                <td key={col.accessor}>
                  {col.render ? col.render(i, row[col.accessor]) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
