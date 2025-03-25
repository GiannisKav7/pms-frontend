import React, { useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const UnitTable = () => {
  const navigate = useNavigate();

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
      render: (text, record) => (
        <a onClick={() => navigate(`/unit/${record.unitCode}`)}>
          {text}
        </a>
      ),
    },
    {
      title: "Building Code",
      dataIndex: "buildingCode",
      key: "buildingCode",
      render: (text, record) => (
        <a onClick={() => navigate(`/building/${record.buildingCode}`)}>
          {text}
        </a>
      ),
    },
    {
      title: "Floor Code",
      dataIndex: "floorCode",
      key: "floorCode",
      render: (text, record) => (
        <a onClick={() => navigate(`/floor/${record.floorCode}`)}>
          {text}
        </a>
      ),
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

  const [data] = useState([
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
  ]);

  return <Table columns={columns} dataSource={data} />;
};

export default UnitTable;
