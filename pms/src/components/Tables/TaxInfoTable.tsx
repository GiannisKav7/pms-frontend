import React from "react";
import Table from "../ui/Table";
import styles from "./TaxInfoTable.module.css";
import { taxInfoTableData } from "../../data/taxInfoTableData";

export const TaxInfoTable: React.FC = () => {
  const columns = [
    {
      header: "Legal Entity/Owner Code",
      accessor: "legalEntityCode",
    },
    {
      header: "Tax Authority",
      accessor: "taxAuthority",
    },
    {
      header: "Base currency",
      accessor: "baseCurrency",
    },
    {
      header: "Tax opted (Yes/No)",
      accessor: "taxOpted",
    },
    {
      header: "Tax Status Changed",
      accessor: "taxStatusChanged",
    },
    {
      header: "Status",
      accessor: "status",
    },
    {
      header: "Default Sales Transaction Type",
      accessor: "defaultSalesTransactionType",
    },
    {
      header: "Default Purchases Transaction Type",
      accessor: "defaultPurchasesTransactionType",
    },
    {
      header: "Tax Point",
      accessor: "taxPoint",
    },
    {
      header: "Report Entity Code",
      accessor: "reportEntityCode",
    },
  ];

  return (
    <div className={styles.container}>
        <Table columns={columns} data={taxInfoTableData} />
    </div>
  );
};