import React, { useState } from "react";
import { Table } from "antd";
import UnitForm from "../../Forms/UnitForm";

const UnitTable = () => {
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
  ]);

  // Callback to save updated record from the inline editing form
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
          <UnitForm record={record} onSave={handleSave} />
        ),
        rowExpandable: () => true,
      }}
    />
  );
};

export default UnitTable;
