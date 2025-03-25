import React, { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";


const ClausesTable = () => {
  const navigate = useNavigate();
  
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
      render: (text, record) => (
        <a onClick={() => navigate(`/unit/${record.unitCode}`)}>
          {text}
        </a>
      ),
    },
  ];

  const [data] = useState([
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

  return <Table columns={columns} dataSource={data} />;
};

export default ClausesTable;
