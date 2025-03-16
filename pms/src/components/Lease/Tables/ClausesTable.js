import React, { useState } from "react";
import { Table } from "antd";
import ExpandedRowForm from "../ExpandedRowForm";

const ClausesTable = () => {
  // Define table columns for the Clauses Table with updated columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Reference",
      dataIndex: "reference",
      key: "reference",
    },
    {
      title: "Unit(s)",
      dataIndex: "units",
      key: "units",
    },
  ];

  // Example data; adjust according to real usage
  const [data, setData] = useState([
    {
      key: "1",
      name: "Clause A",
      description: "Details about Clause A",
      date: "2023-01-01",
      endDate: "2023-12-31",
      reference: "REF-001",
      units: "Unit 1, Unit 2",
    },
    {
      key: "2",
      name: "Clause B",
      description: "Some details about Clause B",
      date: "2023-02-01",
      endDate: "2023-11-30",
      reference: "REF-002",
      units: "Unit 3",
    },
  ]);

  // Define form fields for the expanded row form with updated fields
  const editFields = [
    {
      name: "name",
      label: "Name",
      component: "Input",
      componentProps: { placeholder: "Enter clause name" },
    },
    {
      name: "description",
      label: "Description",
      component: "Input",
      componentProps: { placeholder: "Enter description" },
    },
    {
      name: "date",
      label: "Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "endDate",
      label: "End Date",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "reference",
      label: "Reference",
      component: "Input",
      componentProps: { placeholder: "Enter reference" },
    },
    {
      name: "units",
      label: "Unit(s)",
      component: "Input",
      componentProps: { placeholder: "Enter unit(s)" },
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

export default ClausesTable;
