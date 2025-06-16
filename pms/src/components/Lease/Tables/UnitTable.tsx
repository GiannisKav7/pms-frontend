import React from "react";
import Table from "../../ui/Table";
import { unitTableData } from "../../../data/unitTableData";
import Card from "../../ui/Card";
import styles from "./UnitTable.module.css";

const UnitTable:React.FC = () => {

  const columns = [
    {
      header: "Unit Name",
      accessor: "unitName",
    },
    {
      header: "Unit Code",
      accessor: "unitCode",
      
    },
    {
      header: "Building Code",
      accessor: "buildingCode",
     
    },
    {
      header: "Floor Code",
      accessor: "floorCode",
      
    },
    {
      header: "Location",
      accessor: "location",
    },
    {
      header: "From Date",
      accessor: "fromDate",
    },
    {
      header: "To Date",
      accessor: "toDate",
    },
    {
      header: "Moving In Date",
      accessor: "movingInDate",
    },
    {
      header: "Moving Out Date",
      accessor: "movingOutDate",
    },
  ];

  return(
    <div className={styles.container}>
      <Card title="Unit Table" className={styles.card}>
        <Table columns={columns} data={unitTableData} />
      </Card>
    </div>
  );
};


export default UnitTable;
