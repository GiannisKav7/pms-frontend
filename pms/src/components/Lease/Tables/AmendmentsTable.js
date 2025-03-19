import React, { useState } from "react";
import { Table } from "antd";

const AmendmentsTable = () => {
  // Define table columns based on your requirements
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

  // Example data; adjust according to real usage
  const [data, setData] = useState([
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

  // Define form fields for the expanded row form
  const editFields = [
    {
      name: "type",
      label: "Type",
      component: "Input",
      componentProps: { placeholder: "Enter amendment type" },
    },
    {
      name: "status",
      label: "Status",
      component: "Input",
      componentProps: { placeholder: "Enter status" },
    },
    {
      name: "dateFrom",
      label: "Date From",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "dateTo",
      label: "Date To",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "period",
      label: "Period",
      component: "Input",
      componentProps: { placeholder: "Enter period" },
    },
    {
      name: "description",
      label: "Description (Notes)",
      component: "Input",
      componentProps: { placeholder: "Enter description or notes" },
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
    />
  );
};

export default AmendmentsTable;