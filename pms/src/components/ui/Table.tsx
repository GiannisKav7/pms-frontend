import React from "react";
import styles from "./Table.module.css";

interface Column {
  header: string;
  accessor: string;
  render?: (row: number, value: string) => React.ReactNode;
  postfix?: string;
  prefix?: string;
}

interface TableProps {
  columns: Column[];
  caption?: string;
  className?:string;
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, caption, data }) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        {caption ? <caption>{caption}</caption>: ""}

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
                  {col.prefix ? ` ${col.prefix}` : ""}
                  {col.render ? col.render(i, row[col.accessor]) : row[col.accessor]}                  
                  {col.postfix ? ` ${col.postfix}` : ""}
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
