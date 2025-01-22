import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";

const { TabPane } = Tabs;

const UnitDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const initialDetails = {
    propertyInformation: "test",
    unitTypeCode: "144241",
    propertyCode: "545422",
    weeklyRent: "100",
    buildingCode: "155611",
    area: "45",
    floorCode: "251551",
    residentialBedrooms: "1",
    residentialBathrooms: "1",
    unitCode: "125115",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    city: "",
    countyMunicipality: "",
    prefecture: "",
    region: "",
    postcode: "",
    country: "",
    descriptionNotes: "",
  };

  const [unitDetails, setUnitDetails] = useState(initialDetails);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(unitDetails);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setUnitDetails(values);
      setIsEditing(false);
    });
  };

  const tabData = {
    occupancyInfo: [
      { key: "1", unitStatus: "", dateAvailable: "", dateReady: "", furnished: "" },
    ],
    roomTotals: [
      { key: "1", totalRooms: "", occupiedRooms: "", unoccupiedRooms: "", totalBeds: "", occupiedBeds: "", unoccupiedBeds: "", assignableCapacity: "", maxCapacity: "" },
    ],
    rooms: [
      { key: "1", roomCode: "", descriptionNotes: "", roomStatus: "", area: "", accessibleDisabled: "", dateAvailable: "", dateVacant: "", tenantCode: "" },
    ],
  };

  const tabColumns = {
    occupancyInfo: [
      { title: "Unit Status", dataIndex: "unitStatus", key: "unitStatus" },
      { title: "Date Available", dataIndex: "dateAvailable", key: "dateAvailable" },
      { title: "Date Ready", dataIndex: "dateReady", key: "dateReady" },
      { title: "Furnished (Flag)", dataIndex: "furnished", key: "furnished" },
    ],
    roomTotals: [
      { title: "Total Rooms", dataIndex: "totalRooms", key: "totalRooms" },
      { title: "Occupied Rooms", dataIndex: "occupiedRooms", key: "occupiedRooms" },
      { title: "Unoccupied Rooms", dataIndex: "unoccupiedRooms", key: "unoccupiedRooms" },
      { title: "Total Beds", dataIndex: "totalBeds", key: "totalBeds" },
      { title: "Occupied Beds", dataIndex: "occupiedBeds", key: "occupiedBeds" },
      { title: "Unoccupied Beds", dataIndex: "unoccupiedBeds", key: "unoccupiedBeds" },
      { title: "Assignable Capacity", dataIndex: "assignableCapacity", key: "assignableCapacity" },
      { title: "Maximum Capacity", dataIndex: "maxCapacity", key: "maxCapacity" },
    ],
    rooms: [
      { title: "Room Code", dataIndex: "roomCode", key: "roomCode" },
      { title: "Description - Notes", dataIndex: "descriptionNotes", key: "descriptionNotes" },
      { title: "Room Status", dataIndex: "roomStatus", key: "roomStatus" },
      { title: "Area (sqm/sqft)", dataIndex: "area", key: "area" },
      { title: "Accessible for Disabled (Flag)", dataIndex: "accessibleDisabled", key: "accessibleDisabled" },
      { title: "Date Available", dataIndex: "dateAvailable", key: "dateAvailable" },
      { title: "Date Vacant", dataIndex: "dateVacant", key: "dateVacant" },
      { title: "Tenant Code", dataIndex: "tenantCode", key: "tenantCode" },
    ],
  };

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Unit Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        <Divider>Basic Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
          {Object.entries(unitDetails).map(([key, value]) => (
            <Descriptions.Item label={key.replace(/([A-Z])/g, " $1")} key={key}>
              {isEditing ? (
                <Form.Item
                  name={key}
                  noStyle
                  rules={[{ required: true, message: `${key} is required` }]}
                >
                  <Input style={{ margin: "4px 0" }} />
                </Form.Item>
              ) : (
                <span style={{ color: "#595959" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Form>
      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
        <TabPane tab="Occupancy Information" key="1">
          <Table dataSource={tabData.occupancyInfo} columns={tabColumns.occupancyInfo} pagination={false} />
        </TabPane>
        <TabPane tab="Residential - Room Total Information" key="2">
          <Table dataSource={tabData.roomTotals} columns={tabColumns.roomTotals} pagination={false} />
        </TabPane>
        <TabPane tab="Rooms" key="3">
          <Table dataSource={tabData.rooms} columns={tabColumns.rooms} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UnitDetails;
