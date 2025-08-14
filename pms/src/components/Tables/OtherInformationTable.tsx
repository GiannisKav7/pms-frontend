import React from "react";
import Table from "../ui/Table";
import styles from "./OtherInformationTable.module.css";
import { otherInformationTableData } from "../../data/otherInformationTableData";

const OtherInformationTable: React.FC = () => {
    const columns = [
        {
            header: "Contractor",
            accessor: "contractor",
        },
        {
            header: "Contractor Reference Number",
            accessor: "contractorReferenceNumber",
        },
        {
            header: "NRL",
            accessor: "nrl",
        },
        {
            header: "NRL Registered",
            accessor: "nrlRegistered",
        },
        {
            header: "NRL Number",
            accessor: "nrlNumber",
        },
        {
            header: "Commercial Registration Number",
            accessor: "commercialRegistrationNumber",
        },
        {
            header: "City Of Registration",
            accessor: "cityOfRegistration",
        },
        {
            header: "Share Capital Amount",
            accessor: "shareCapitalAmount",
        },
        {
            header: "Deferred Income/Expense Proration",
            accessor: "deferredIncomeExpenseProration",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={otherInformationTableData} />
        </div>
    );
};

export default OtherInformationTable;
