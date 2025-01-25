import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Option } = Select;

const RoomDetails = () => {
  const initialDetails = {
    propertyCode: "P-001",
    roomCode: "R-101",
    buildingCode: "B-001",
    totalRent: "$1,200",
    floorCode: "F-2",
    rentPerSqm: "$15/sqm",
    unitCode: "U-001",
    grossArea: "50 sqm",
    netArea: "45 sqm",
    notesDescription: "A spacious room with great lighting.",
    roomDescription: "Corner room with windows.",
    roomType: "Residential",
    roomStatus: "Vacant Unrented Ready",
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
      assignableCapacity: "4",
      currentOccupancy: "2",
      roomStatus: "Occupied",
      maximumCapacity: "5",
      downStatus: "No",
      dateAvailable: "2024-01-01",
      dateReady: "2024-01-15",
      rentReady: "Yes",
      accessibility: "Yes",
    },
  ];

  const bedsData = [
    { key: "1", bedCode: "B-101", description: "King Bed", status: "Available" },
    { key: "2", bedCode: "B-102", description: "Queen Bed", status: "Occupied" },
  ];

  const generalData = [
    { key: "1", field: "Custom Field 1", value: "Value 1" },
    { key: "2", field: "Custom Field 2", value: "Value 2" },
  ];

  const tabColumns = {
    attributes: [
      { title: "Assignable Capacity", dataIndex: "assignableCapacity", key: "assignableCapacity" },
      { title: "Current Occupancy", dataIndex: "currentOccupancy", key: "currentOccupancy" },
      { title: "Room Status", dataIndex: "roomStatus", key: "roomStatus" },
      { title: "Maximum Capacity", dataIndex: "maximumCapacity", key: "maximumCapacity" },
      { title: "Down Status", dataIndex: "downStatus", key: "downStatus" },
      { title: "Date Available", dataIndex: "dateAvailable", key: "dateAvailable" },
      { title: "Date Ready", dataIndex: "dateReady", key: "dateReady" },
      { title: "Rent Ready (Yes/No)", dataIndex: "rentReady", key: "rentReady" },
      { title: "Accessibility (Yes/No)", dataIndex: "accessibility", key: "accessibility" },
    ],
    beds: [
      {
        title: "Bed Code",
        dataIndex: "bedCode",
        key: "bedCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "bed")}>
            {text}
          </a>
        ),
      },
      { title: "Description", dataIndex: "description", key: "description" },
      { title: "Status", dataIndex: "status", key: "status" },
    ],
    general: [
      { title: "Field", dataIndex: "field", key: "field" },
      { title: "Value", dataIndex: "value", key: "value" },
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
            <Descriptions.Item label={key.replace(/([A-Z])/g, " $1")} key={key}>
              {key.toLowerCase().includes("code") && !isEditing ? (
                <a
                  style={{ color: "#1890ff" }}
                  onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}
                >
                  {value}
                </a>
              ) : isEditing && key === "roomStatus" ? (
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
