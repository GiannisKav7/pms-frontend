// src/components/RentChargesTable.jsx
import React, { useState } from "react";
import { Table } from "antd";
import ExpandedRowForm from "./ExpandedRowForm";

const RentChargesTable = () => {
  // Example data; in real usage, fetch from API or pass as prop
  const [data, setData] = useState([
    {
      key: "1",
      chargeName: "Base Rent",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      frequency: "Monthly",
      payer: "Tenant A",
      amount: 1000,
      notes: "Some notes here",
    },
    {
      key: "2",
      chargeName: "Parking Fee",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      frequency: "Monthly",
      payer: "Tenant B",
      amount: 200,
      notes: "Parking area fee",
    },
    // ... more rows
  ]);

  // Main columns (collapsed view)
  const columns = [
    {
      title: "Charge Name",
      dataIndex: "chargeName",
      key: "chargeName",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Frequency",
      dataIndex: "frequency",
      key: "frequency",
    },
    {
      title: "Payer",
      dataIndex: "payer",
      key: "payer",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (val) => `€ ${val.toLocaleString()}`,
    },
  ];

  // Callback to save updated record from the expanded form
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
          <ExpandedRowForm record={record} onSave={handleSave} />
        ),
        rowExpandable: () => true,
      }}
    />
  );
};

export default RentChargesTable;
