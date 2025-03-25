// src/components/RentChargesTable.jsx
import React, { useState } from "react";
import { Table } from "antd";

const AmendmentsTable = () => {
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date From",
      dataIndex: "dateFrom",
      key: "dateFrom",
    },
    {
      title: "Date To",
      dataIndex: "dateTo",
      key: "dateTo",
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
    },
    {
      title: "Description (Notes)",
      dataIndex: "description",
      key: "description",
    },
  ];

  // Example data in read-only mode
  const [data] = useState([
    {
      key: "1",
      type: "Lease Extension",
      status: "Approved",
      dateFrom: "2023-05-01",
      dateTo: "2024-04-30",
      period: "Yearly",
      description: "Extension due to agreement revision",
    },
    {
      key: "2",
      type: "Rent Adjustment",
      status: "Pending",
      dateFrom: "2023-07-01",
      dateTo: "2023-12-31",
      period: "Monthly",
      description: "Adjustment based on revised market rates",
    },
  ]);

  return <Table columns={columns} dataSource={data} />;
};

export default AmendmentsTable;