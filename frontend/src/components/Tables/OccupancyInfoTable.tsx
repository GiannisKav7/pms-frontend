import React from "react";
import Table from "../ui/Table";
import styles from "./OccupancyInfoTable.module.css";
import { occupancyInfoTableData } from "../../data/occupancyInfoTableData";

const OccupancyInfoTable: React.FC = () => {
    const columns = [
        {
            header: "Unit Status",
            accessor: "unitStatus",
        },
        {
            header: "Date Available",
            accessor: "dateAvailable",
        },
        {
            header: "Date Ready",
            accessor: "dateReady",
        },
        {
            header: "Furnished",
            accessor: "furnished",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={occupancyInfoTableData} />
        </div>
    );
};

export default OccupancyInfoTable;