import React, { useState } from "react";
import { Table } from "antd";
import ExpandedRowForm from "./ExpandedRowForm";

const UnitTable = () => {
  // Example data; in real usage, fetch from an API or pass as a prop
  const columns = [
    {
      title: "Unit Name",
      dataIndex: "unitName",
      key: "unitName",
    },
    {
      title: "Unit Code",
      dataIndex: "unitCode",
      key: "unitCode",
    },
    {
      title: "Building Code",
      dataIndex: "buildingCode",
      key: "buildingCode",
    },
    {
      title: "Floor Code",
      dataIndex: "floorCode",
      key: "floorCode",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "From Date",
      dataIndex: "fromDate",
      key: "fromDate",
    },
    {
      title: "To Date",
      dataIndex: "toDate",
      key: "toDate",
    },
    {
      title: "Moving In Date",
      dataIndex: "movingInDate",
      key: "movingInDate",
    },
    {
      title: "Moving Out Date",
      dataIndex: "movingOutDate",
      key: "movingOutDate",
    },
  ];

  const [data, setData] = useState([
    {
      key: "1",
      unitName: "Unit A",
      unitCode: "A1",
      buildingCode: "B1",
      floorCode: "F1",
      location: "Location 1",
      fromDate: "2023-01-01",
      toDate: "2023-12-31",
      movingInDate: "2023-01-05",
      movingOutDate: "2023-12-25",
    },
    {
      key: "2",
      unitName: "Unit B",
      unitCode: "B1",
      buildingCode: "B2",
      floorCode: "F2",
      location: "Location 2",
      fromDate: "2023-02-01",
      toDate: "2023-11-30",
      movingInDate: "2023-02-05",
      movingOutDate: "2023-11-25",
    },
    // ... more rows
  ]);

  // Define form fields for the expanded row form
  const editFields = [
    {
      name: "unitName",
      label: "Unit Name",
      component: "Input",
      componentProps: { placeholder: "Enter unit name" },
    },
    {
      name: "unitCode",
      label: "Unit Code",
      component: "Input",
      componentProps: { placeholder: "Enter unit code" },
    },
    {
      name: "buildingCode",
      label: "Building Code",
      component: "Input",
      componentProps: { placeholder: "Enter building code" },
    },
    {
      name: "floorCode",
      label: "Floor Code",
      component: "Input",
      componentProps: { placeholder: "Enter floor code" },
    },
    {
      name: "location",
      label: "Location",
      component: "Input",
      componentProps: { placeholder: "Enter location" },
    },
    {
      name: "fromDate",
      label: "From Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "toDate",
      label: "To Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "movingInDate",
      label: "Moving In Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "movingOutDate",
      label: "Moving Out Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
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
          <ExpandedRowForm record={record} onSave={handleSave} fields={editFields} />
        ),
        rowExpandable: () => true,
      }}
    />
  );
};

export default UnitTable;
