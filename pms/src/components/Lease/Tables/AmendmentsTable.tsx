// src/components/RentChargesTable.jsx
import React from "react";
import Table from "../../ui/Table";
import Card from "../../ui/Card";
import styles from "./AmendmentsTable.module.css";
import { amendmentsTableData } from "../../../data/amendmentsTableData";

const columns = [
  {
    header: "Type",
    accessor: "type",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Date From",
    accessor: "dateFrom",
  },
  {
    header: "Date To",
    accessor: "dateTo",
  },
  {
    header: "Period",
    accessor: "period",
  },
  {
    header: "Description (Notes)",
    accessor: "description",
  },
];

const AmendmentsTable: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card title="Amendments Table" className={styles.card}>
        <Table columns={columns} data={amendmentsTableData} />
      </Card>
    </div>
  );
};

export default AmendmentsTable;