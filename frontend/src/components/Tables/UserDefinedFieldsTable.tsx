import React from "react";
import Table from "../ui/Table";
import styles from "./UserDefinedFieldsTable.module.css";
import { userDefinedFieldsData } from "../../data/userDefinedFieldsData";

const UserDefinedFieldsTable: React.FC = () => {
    const columns = [
        {
            header: "Bedrooms",
            accessor: "bedrooms",
        },
        {
            header: "Bathrooms",
            accessor: "bathrooms",
        },
        {
            header: "Parking",
            accessor: "parking",
        },
        {
            header: "Appliance",
            accessor: "appliance",
        },
        {
            header: "Furniture",
            accessor: "furniture",
        },
        {
            header: "Utilities",
            accessor: "utilities",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={userDefinedFieldsData} />
        </div>
    );
};

export default UserDefinedFieldsTable;