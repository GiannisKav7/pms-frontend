import React from "react";
import Table from "../ui/Table";
import styles from "./ContactsTable.module.css";
import { contactTableData } from "../../data/contactsTableData";

const ContactsTable: React.FC = () => {
  const columns = [
    {
      header: "Contact Code",
      accessor: "contactCode",
    },
    {
      header: "Role",
      accessor: "role",
    },
    {
      header: "Primary (flag)",
      accessor: "primary",
    },
    {
      header: "Company Name",
      accessor: "companyName",
    },
    {
      header: "First Name",
      accessor: "firstName",
    },
    {
      header: "Last Name",
      accessor: "lastName",
    },
    {
      header: "Phone Number 1",
      accessor: "phone1",
    },
    {
      header: "Phone Number 2",
      accessor: "phone2",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Inactive Date",
      accessor: "inactiveDate",
    },
  ];

  return (
    <div className={styles.container}>
        <Table columns={columns} data={contactTableData} />
    </div>
  );
};

export default ContactsTable;