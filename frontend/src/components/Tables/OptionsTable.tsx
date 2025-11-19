import React from "react";
import Table from "../ui/Table";
import { optionTableData } from "../../data/optionsTableData";
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
      header: "Area",
      accessor: "area",
      postfix: "m²",
    },
  ];

  return (
    <div className={styles.container}>
        <Table columns={columns} data={optionTableData} />
    </div>
  );};

export default OptionsTable;