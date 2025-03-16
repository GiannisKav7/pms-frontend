import React, { useState } from "react";
import { Table } from "antd";
import ExpandedRowForm from "../ExpandedRowForm";

const ContactsTable = () => {
  // Define table columns for the Contacts Table
  const columns = [
    {
      title: "Contact Code",
      dataIndex: "contactCode",
      key: "contactCode",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Primary (flag)",
      dataIndex: "primary",
      key: "primary",
    },
    {
      title: "Company name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone number 1",
      dataIndex: "phone1",
      key: "phone1",
    },
    {
      title: "Phone number 2",
      dataIndex: "phone2",
      key: "phone2",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Inactive Date",
      dataIndex: "inactiveDate",
      key: "inactiveDate",
    },
  ];

  // Example data; adjust as needed
  const [data, setData] = useState([
    {
      key: "1",
      contactCode: "C001",
      role: "Manager",
      primary: true,
      companyName: "Example Corp",
      firstName: "John",
      lastName: "Doe",
      phone1: "123-456-7890",
      phone2: "098-765-4321",
      email: "john@example.com",
      inactiveDate: "",
    },
    {
      key: "2",
      contactCode: "C002",
      role: "Supervisor",
      primary: false,
      companyName: "Another Corp",
      firstName: "Jane",
      lastName: "Smith",
      phone1: "555-555-5555",
      phone2: "",
      email: "jane@another.com",
      inactiveDate: "2023-12-31",
    },
  ]);

  // Define form fields for the expanded row form
  const editFields = [
    {
      name: "contactCode",
      label: "Contact Code",
      component: "Input",
      componentProps: { placeholder: "Enter contact code" },
    },
    {
      name: "role",
      label: "Role",
      component: "Input",
      componentProps: { placeholder: "Enter role" },
    },
    {
      name: "primary",
      label: "Primary (flag)",
      component: "Input",
      componentProps: { placeholder: "true/false" },
    },
    {
      name: "companyName",
      label: "Company name",
      component: "Input",
      componentProps: { placeholder: "Enter company name" },
    },
    {
      name: "firstName",
      label: "First name",
      component: "Input",
      componentProps: { placeholder: "Enter first name" },
    },
    {
      name: "lastName",
      label: "Last name",
      component: "Input",
      componentProps: { placeholder: "Enter last name" },
    },
    {
      name: "phone1",
      label: "Phone number 1",
      component: "Input",
      componentProps: { placeholder: "Enter primary phone number" },
    },
    {
      name: "phone2",
      label: "Phone number 2",
      component: "Input",
      componentProps: { placeholder: "Enter secondary phone number" },
    },
    {
      name: "email",
      label: "email",
      component: "Input",
      componentProps: { placeholder: "Enter email address" },
    },
    {
      name: "inactiveDate",
      label: "Inactive Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
  ];

  // Callback to save updated record from the expanded row form
  const handleSave = (updatedRecord) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === updatedRecord.key ? updatedRecord : item
      )
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      expandable={{
        expandedRowRender: (record) => (
          <ExpandedRowForm record={record} onSave={handleSave} fields={editFields} />
        ),
        rowExpandable: () => true,
      }}
    />
  );
};

export default ContactsTable;