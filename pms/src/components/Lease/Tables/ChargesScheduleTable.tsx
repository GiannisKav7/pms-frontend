import React from "react";
import Card from "../../ui/Card";
import Table from "../../ui/Table";
import { chargesScheduleTableData } from "../../../data/ChargesScheduleTableData";
import styles from "./ChargesScheduleTable.module.css";

const ChargesScheduleTable: React.FC = () => {

    const columns = [
        {
            header: "Charge Type",
            accessor: "chargeType",
        },
        {
            header: "Charge Code",
            accessor: "chargeCode",
        },
        {
            header: "From",
            accessor: "from",
        },
        {
            header: "To/Inactive",
            accessor: "toInactive",
        },
        {
            header: "Amount",
            accessor: "amount",
        },
        {
            header: "Currency",
            accessor: "currency",
        },
        {
            header: "Amount/Contr.Area",
            accessor: "amountPerContrArea",
        },
        {
            header: "Amount Period",
            accessor: "amountPeriod",
        },
        {
            header: "Unit",
            accessor: "unit",
        },
    ];
    
    return (
    <div className={styles.container}>
      <Card title="Charge Schedule Table" className={styles.card}>
        <Table columns={columns} data={chargesScheduleTableData} />
      </Card>
    </div>
    );
};

export default ChargesScheduleTable;
