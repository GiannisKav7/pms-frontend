import React from "react";
import Table from "../../ui/Table";
import Card from "../../ui/Card";
import styles from "./ClausesTable.module.css";
import { clauseTableData } from "../../../data/clausesTableData";

const ClausesTable: React.FC = () => {

  const columns = [
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Description",
      accessor: "description",
    },
    {
      header: "Date",
      accessor: "date",
    },
    {
      header: "End Date",
      accessor: "endDate",
    },
    {
      header: "Reference",
      accessor: "reference",
    },
    {
      header: "Unit(s)",
      accessor: "units",
    },
  ];

  return (
    <div className={styles.container}>
      <Card title="Clauses Table" className={styles.card}>
        <Table columns={columns} data={clauseTableData} />
      </Card>
    </div>
  );
};

export default ClausesTable;
