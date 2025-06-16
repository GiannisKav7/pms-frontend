import React from "react";
import Table from "../../ui/Table";
import Card from "../../ui/Card";
import { optionTableData } from "../../../data/optionsTableData";
import styles from "./OptionsTable.module.css";

const OptionsTable: React.FC = () => {
  
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
      header: "Expirations Date",
      accessor: "expirationsDate",
    },
    {
      header: "Notice Date",
      accessor: "noticeDate",
    },
    {
      header: "Description (Notes)",
      accessor: "description",
    },
    {
      header: "Unit(s)",
      accessor: "units",
    },
    {
      header: "Area (sqm)",
      accessor: "area",
    },
  ];

  return (
    <div className={styles.container}>
      <Card title="Options Table" className={styles.card}>
        <Table columns={columns} data={optionTableData} />
      </Card>
    </div>
  );};

export default OptionsTable;