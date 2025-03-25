import React, { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const ContactsTable = () => {
  const navigate = useNavigate();
  
  const columns = [
    {
      title: "Contact Code",
      dataIndex: "contactCode",
      key: "contactCode",
      render: (text, record) => (
        <a onClick={() => navigate(`/contact/${record.contactCode}`)}>
          {text}
        </a>
      ),
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Inactive Date",
      dataIndex: "inactiveDate",
      key: "inactiveDate",
    },
  ];

  const [data] = useState([
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

  return <Table columns={columns} dataSource={data} />;
};

export default ContactsTable;