import React from "react";
import Table from "../ui/Table";
import styles from "./RoomsTotalInfoTable.module.css";
import { roomsTotalInfoTableData } from "../../data/roomsTotalInfoTableData";

const RoomsTotalInfoTable: React.FC = () => {
    const columns = [
        {
            header: "Total Room Count",
            accessor: "totalRoomCount",
        },
        {
            header: "Occupied Rooms",
            accessor: "occupiedRooms",
        },
        {
            header: "Unoccupied Rooms",
            accessor: "unoccupiedRooms",
        },
        {
            header: "Total Beds Count",
            accessor: "totalBedsCount",
        },
        {
            header: "Current Occupied Beds",
            accessor: "currentOccupiedBeds",
        },
        {
            header: "Unoccupied Beds",
            accessor: "unoccupiedBeds",
        },
        {
            header: "Assignable Capacity",
            accessor: "assignableCapacity",
            postfix: "%"
        },
        {
            header: "Maximum Capacity",
            accessor: "maximumCapacity",
            postfix: "%"
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={roomsTotalInfoTableData} />
        </div>
    );
};

export default RoomsTotalInfoTable;