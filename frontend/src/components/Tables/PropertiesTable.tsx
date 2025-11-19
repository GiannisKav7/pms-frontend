import React from "react";
import Table from "../ui/Table";
import { propertiesTableData } from "../../data/propertiesTableData";
import styles from "./PropertiesTable.module.css";
import { Link } from "react-router-dom";

const PropertiesTable: React.FC = () => {
    const columns = [
        {
            header: "Property Code",
            accessor: "propertyCode",
            render: (_row: number, value: string) => <Link to={"/property/"+value} className={styles.link}>{value}</Link>
        },
        {
            header: "Property Name",
            accessor: "propertyName",
        },
        {
            header: "Address",
            accessor: "address",
        },
        {
            header: "Percent Owned",
            accessor: "percentOwned",
            postfix: "%",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={propertiesTableData} />
        </div>
    );
};

export default PropertiesTable;