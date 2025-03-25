import React, { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const OptionsTable = () => {
  const navigate = useNavigate();
  
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
      render: (text, record) => (
        <a onClick={() => navigate(`/unit/${record.unitCode}`)}>
          {text}
        </a>
      ),
    },
    {
      title: "Area (sqm)",
      dataIndex: "area",
      key: "area",
    },
  ];

  const [data] = useState([
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

  return <Table columns={columns} dataSource={data} />;
};

export default OptionsTable;