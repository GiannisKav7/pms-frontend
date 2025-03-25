// src/components/RentChargesTable.jsx
import React, { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const RentChargesTable = () => {
  const navigate = useNavigate();
  
  // Example data; in real usage, fetch from API or pass as a prop
  const [data] = useState([
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
  ]);

  // Main columns (read-only view)
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
      render: (text, record) => (
        <a onClick={() => navigate(`/unit/${record.unitCode}`)}>
          {text}
        </a>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default RentChargesTable;
