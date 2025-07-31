import React from "react";
import Table from "../ui/Table";
import { unitTableData } from "../../data/unitTableData";
import styles from "./UnitTable.module.css";
import { Link } from "react-router-dom";

const UnitTable:React.FC = () => {

  const columns = [
    {
      header: "Unit Name",
      accessor: "unitName",
    },
    {
      header: "Unit Code",
      accessor: "unitCode",
      render: (row: number, value: string) => <Link to={`/unit/${value}`} className={styles.link}>{value}</Link>
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
      <Table columns={columns} data={unitTableData} />      
    </div>
  );
};


export default UnitTable;
