import React from "react";
import Table from "../ui/Table";
import styles from "./RoomsTable.module.css";
import { roomsTableData } from "../../data/roomsTableData";

const RoomsTable: React.FC = () => {
    const columns = [
        {
            header: "Room Code",
            accessor: "roomCode",
        },
        {
            header: "Description - Notes",
            accessor: "description",
        },
        {
            header: "Room Status",
            accessor: "roomStatus",
        },
        {
            header: "Area",
            accessor: "area",
        },
        {
            header: "Accessible for Disabled",
            accessor: "accessible",
        },
        {
            header: "Date Available",
            accessor: "dateAvailable",
        },
        {
            header: "Date Vacant",
            accessor: "dateVacant",
        },
        {
            header: "Tenant Code",
            accessor: "tenantCode",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={roomsTableData} />
        </div>
    );
};

export default RoomsTable;