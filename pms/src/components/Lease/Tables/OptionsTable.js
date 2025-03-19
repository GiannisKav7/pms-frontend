import React, { useState } from "react";
import { Table } from "antd";

const OptionsTable = () => {
  // Define table columns for the Options Table
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
      title: "Expirations Date",
      dataIndex: "expirationsDate",
      key: "expirationsDate",
    },
    {
      title: "Notice Date",
      dataIndex: "noticeDate",
      key: "noticeDate",
    },
    {
      title: "Description (Notes)",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Unit(s)",
      dataIndex: "units",
      key: "units",
    },
    {
      title: "Area (sqm)",
      dataIndex: "area",
      key: "area",
    },
  ];

  // Example data; adjust according to real usage
  const [data, setData] = useState([
    {
      key: "1",
      type: "Option A",
      status: "Active",
      expirationsDate: "2024-12-31",
      noticeDate: "2024-11-30",
      description: "Option note details",
      units: "Unit 1, Unit 2",
      area: 1200,
    },
    {
      key: "2",
      type: "Option B",
      status: "Inactive",
      expirationsDate: "2023-06-30",
      noticeDate: "2023-05-31",
      description: "Some more option details",
      units: "Unit 3",
      area: 800,
    },
  ]);

  // Define form fields for the expanded row form
  const editFields = [
    {
      name: "type",
      label: "Type",
      component: "Input",
      componentProps: { placeholder: "Enter option type" },
    },
    {
      name: "status",
      label: "Status",
      component: "Input",
      componentProps: { placeholder: "Enter status" },
    },
    {
      name: "expirationsDate",
      label: "Expirations Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "noticeDate",
      label: "Notice Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "description",
      label: "Description (Notes)",
      component: "Input",
      componentProps: { placeholder: "Enter description or notes" },
    },
    {
      name: "units",
      label: "Unit(s)",
      component: "Input",
      componentProps: { placeholder: "Enter unit(s)" },
    },
    {
      name: "area",
      label: "Area (sqm)",
      component: "Input",
      componentProps: { placeholder: "Enter area in sqm" },
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
    />
  );
};

export default OptionsTable;