// src/components/RentChargesTable.jsx
import React, { useState } from "react";
import { Table, Input, InputNumber } from "antd";
import ExpandedRowForm from "../ExpandedRowForm";

const RentChargesTable = () => {
  // Example data; in real usage, fetch from API or pass as a prop
  const [data, setData] = useState([
    {
      key: "1",
      chargeType: "Base Rent",
      chargeCode: "BR001",
      from: "2023-01-01",
      toInactive: "2023-12-31",
      amount: 1000,
      currency: "USD",
      amountPerContrArea: 10,
      amountPeriod: "Monthly",
      unit: "456456",
    },
    {
      key: "2",
      chargeType: "Parking Fee",
      chargeCode: "PF001",
      from: "2023-01-01",
      toInactive: "2023-12-31",
      amount: 200,
      currency: "USD",
      amountPerContrArea: 2,
      amountPeriod: "Monthly",
      unit: "123122",
    },
    // ... more rows
  ]);

  // Main columns (collapsed view)
  const columns = [
    {
      title: "Charge Type",
      dataIndex: "chargeType",
      key: "chargeType",
    },
    {
      title: "Charge Code",
      dataIndex: "chargeCode",
      key: "chargeCode",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To/Inactive",
      dataIndex: "toInactive",
      key: "toInactive",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Amount/Contr.Area",
      dataIndex: "amountPerContrArea",
      key: "amountPerContrArea",
    },
    {
      title: "Amount Period",
      dataIndex: "amountPeriod",
      key: "amountPeriod",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
  ];

  // Define form fields for the expanded row form
  const editFields = [
    {
      name: "chargeType",
      label: "Charge Type",
      component: "Input",
      componentProps: { placeholder: "Enter charge type" },
    },
    {
      name: "chargeCode",
      label: "Charge Code",
      component: "Input",
      componentProps: { placeholder: "Enter charge code" },
    },
    {
      name: "from",
      label: "From",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "toInactive",
      label: "To/Inactive",
      component: "Input",
      componentProps: { placeholder: "YYYY-MM-DD" },
    },
    {
      name: "amount",
      label: "Amount",
      component: "InputNumber",
      componentProps: { placeholder: "Enter amount" },
    },
    {
      name: "currency",
      label: "Currency",
      component: "Input",
      componentProps: { placeholder: "Enter currency" },
    },
    {
      name: "amountPerContrArea",
      label: "Amount/Contr.Area",
      component: "InputNumber",
      componentProps: {
        placeholder: "Enter amount per contr. area",
      },
    },
    {
      name: "amountPeriod",
      label: "Amount Period",
      component: "Input",
      componentProps: { placeholder: "Enter period" },
    },
    {
      name: "unit",
      label: "Unit",
      component: "Input",
      componentProps: { placeholder: "Enter unit" },
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
          <ExpandedRowForm
            record={record}
            onSave={handleSave}
            fields={editFields}
          />
        ),
        rowExpandable: () => true,
      }}
    />
  );
};

export default RentChargesTable;
