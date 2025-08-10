import React from "react";
import Table from "../ui/Table";
import styles from "./PaymentInfoTable.module.css";
import { paymentInfoTableData } from "../../data/paymentInfoTableData";

const PaymentInfoTable: React.FC = () => {
    const columns = [
        {
            header: "Check Memo",
            accessor: "checkMemo",
        },
        {
            header: "Draw Account",
            accessor: "drawAccount",
        },
        {
            header: "Hold Payments",
            accessor: "holdPayments",
        },
        {
            header: "Consolidate Cheques",
            accessor: "consolidateCheques",
        },
        {
            header: "Payment Method",
            accessor: "paymentMethod",
        },
    ];

    return (
        <div className={styles.container}>
            <Table columns={columns} data={paymentInfoTableData} />
        </div>
    );
};

export default PaymentInfoTable;