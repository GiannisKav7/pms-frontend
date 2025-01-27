import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Option } = Select;

const RoomDetails = () => {
  const initialDetails = {
    PropertyCode: "P-001",
    RoomCode: "R-101",
    BuildingCode: "B-001",
    TotalRent: "$1,200",
    FloorCode: "F-2",
    RentPerSqm: "$15/sqm",
    UnitCode: "U-001",
    GrossArea: "50 sqm",
    NetArea: "45 sqm",
    NotesDescription: "A spacious room with great lighting.",
    RoomDescription: "Corner room with windows.",
    RoomType: "Residential",
    RoomStatus: "Vacant Unrented Ready",
  };

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [details, setDetails] = useState(initialDetails);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(details);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setDetails(values);
      setIsEditing(false);
    });
  };

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  const attributesData = [
    {
      key: "1",
      AssignableCapacity: "4",
      CurrentOccupancy: "2",
      RoomStatus: "Occupied",
      MaximumCapacity: "5",
      DownStatus: "No",
      DateAvailable: "2024-01-01",
      DateReady: "2024-01-15",
      RentReady: "Yes",
      Accessibility: "Yes",
    },
  ];

  const bedsData = [
    { key: "1", BedCode: "B-101", Description: "King Bed", Status: "Available" },
    { key: "2", BedCode: "B-102", Description: "Queen Bed", Status: "Occupied" },
  ];

  const generalData = [
    { key: "1", Field: "Custom Field 1", Value: "Value 1" },
    { key: "2", Field: "Custom Field 2", Value: "Value 2" },
  ];

  const tabColumns = {
    attributes: [
      { title: "Assignable Capacity", dataIndex: "AssignableCapacity", key: "AssignableCapacity" },
      { title: "Current Occupancy", dataIndex: "CurrentOccupancy", key: "CurrentOccupancy" },
      { title: "Room Status", dataIndex: "RoomStatus", key: "RoomStatus" },
      { title: "Maximum Capacity", dataIndex: "MaximumCapacity", key: "MaximumCapacity" },
      { title: "Down Status", dataIndex: "DownStatus", key: "DownStatus" },
      { title: "Date Available", dataIndex: "DateAvailable", key: "DateAvailable" },
      { title: "Date Ready", dataIndex: "DateReady", key: "DateReady" },
      { title: "Rent Ready (Yes/No)", dataIndex: "RentReady", key: "RentReady" },
      { title: "Accessibility (Yes/No)", dataIndex: "Accessibility", key: "Accessibility" },
    ],
    beds: [
      {
        title: "Bed Code",
        dataIndex: "BedCode",
        key: "BedCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "bed")}>
            {text}
          </a>
        ),
      },
      { title: "Description", dataIndex: "Description", key: "Description" },
      { title: "Status", dataIndex: "Status", key: "Status" },
    ],
    general: [
      { title: "Field", dataIndex: "Field", key: "Field" },
      { title: "Value", dataIndex: "Value", key: "Value" },
    ],
  };

  const roomStatusOptions = [
    "Vacant Unrented Not Ready",
    "Vacant Unrented Ready",
    "Vacant Rented",
    "Occupied",
    "Occupied No Notice",
  ];

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Room Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        <Divider>Basic Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
          {Object.entries(details).map(([key, value]) => (
            <Descriptions.Item label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} key={key}>
              {key.toLowerCase().includes("code") && !isEditing ? (
                <a
                  style={{ color: "#1890ff" }}
                  onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}
                >
                  {value}
                </a>
              ) : isEditing && key === "RoomStatus" ? (
                <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                  <Select style={{ margin: "4px 0" }}>
                    {roomStatusOptions.map((option) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              ) : isEditing ? (
                <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                  <Input style={{ margin: "4px 0" }} />
                </Form.Item>
              ) : (
                <span style={{ color: "#595999" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Form>

      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
        <TabPane tab="Attributes" key="1">
          <Table dataSource={attributesData} columns={tabColumns.attributes} pagination={false} />
        </TabPane>
        <TabPane tab="Beds" key="2">
          <Table dataSource={bedsData} columns={tabColumns.beds} pagination={false} />
        </TabPane>
        <TabPane tab="General" key="3">
          <Table dataSource={generalData} columns={tabColumns.general} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default RoomDetails;
