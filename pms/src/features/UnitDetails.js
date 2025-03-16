import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider, Select, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

import { renderFieldByType } from "../components/customFunctions/fieldRenderer";

const { TabPane } = Tabs;

const fieldConfig = {
  propertyInformation: { type: "text" },
  unitTypeCode: { type: "text" },
  propertyCode: { type: "text" },
  buildingCode: { type: "text" },
  floorCode: { type: "text" },
  unitCode: { type: "text" },
  address1: { type: "text" }, // Street Address
  address2: { type: "number" }, // Number
  address3: { type: "text" },
  address4: { type: "text" },

  // The dropdown fields (city, county, etc.) each have a "select" type with placeholder options
  city: {
    type: "select",
    options: [
      { label: "Athens", value: "Athens" },
      { label: "Thessaloniki", value: "Thessaloniki" },
    ],
  },
  countyMunicipality: {
    type: "select",
    options: [
      { label: "County1", value: "County1" },
      { label: "County2", value: "County2" },
    ],
  },
  prefecture: {
    type: "select",
    options: [
      { label: "Prefecture1", value: "Prefecture1" },
      { label: "Prefecture2", value: "Prefecture2" },
    ],
  },
  region: {
    type: "select",
    options: [
      { label: "Region1", value: "Region1" },
      { label: "Region2", value: "Region2" },
    ],
  },
  country: {
    type: "select",
    options: [
      { label: "Greece", value: "Greece" },
      { label: "Other", value: "Other" },
    ],
  },
  postcode: { type: "text" },

  weeklyRent: { 
    type: 'number',
    min: 0,
    step: 1,
    prefix: '€/sqm',
  },             
  area: { 
    type: 'number',
    min: 0,
    step: 1,
    prefix: 'sqm',
  },                    // e.g. 45 (sqm or sqft)
  residentialBedrooms: { 
    type: 'number',
    min: 0,
    step: 1,
  },     // e.g. 1
  residentialBathrooms: { 
    type: 'number',
    min: 0,
    step: 1,
  },    // e.g. 1

  descriptionNotes: { type: "text" },
};

const UnitDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const initialDetails = {
    propertyInformation: "Test",
    unitTypeCode: "144241",
    propertyCode: "545422",
    buildingCode: "155611",
    floorCode: "251551",
    unitCode: "125115",
    address1: "",
    address2: "", // if you want it numeric, store it as a number initially e.g. 0
    address3: "",
    address4: "",
    city: "",
    countyMunicipality: "",
    prefecture: "",
    region: "",
    postcode: "",
    country: "",
    weeklyRent: 100,             
    area: 50,                    
    residentialBedrooms: 1,      
    residentialBathrooms: 1,     
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

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  const tabData = {
    occupancyInfo: [
      { key: "1", unitStatus: "Available", dateAvailable: "2024-02-01", dateReady: "2024-01-15", furnished: "Yes" },
    ],
    roomTotals: [
      { key: "1", totalRooms: "3", occupiedRooms: "2", unoccupiedRooms: "1", totalBeds: "3", occupiedBeds: "2", unoccupiedBeds: "1", assignableCapacity: "3", maxCapacity: "4" },
    ],
    rooms: [
      { key: "1", roomCode: "R-001", descriptionNotes: "Master Bedroom", roomStatus: "Occupied", area: "20 sqm", accessibleDisabled: "No", dateAvailable: "2024-03-01", dateVacant: "2024-06-01", tenantCode: "T-001" },
    ],
    userDefinedFields: [
      { key: "1", bedrooms: "3", bathrooms: "2", parking: "Yes", appliance: "Yes", furniture: "Fully Furnished", utilities: "Included", other1: "N/A", other2: "N/A", other3: "N/A" },
    ],
    residentialRules: [
      { key: "1", ruleType: "No Smoking" },
    ],
    contacts: [
      {
        key: "1",
        contactCode: "C-001",
        role: "Manager",
        primary: "Yes",
        companyName: "Alpha Corp",
        firstName: "John",
        lastName: "Doe",
        phoneNumber1: "+30 210 1234567",
        phoneNumber2: "+30 210 7654321",
        email: "john.doe@example.com",
        inactiveDate: "2024-01-01",
      },
    ],
    academicTerms: [
      { key: "1", academicTermCode: "AT-001", level: "Undergraduate", unitOverride: "Yes" },
    ],
  };

  const tabColumns = {
    occupancyInfo: [
      { title: "Unit Status", dataIndex: "unitStatus", key: "unitStatus" },
      { title: "Date Available", dataIndex: "dateAvailable", key: "dateAvailable" },
      { title: "Date Ready", dataIndex: "dateReady", key: "dateReady" },
      { title: "Furnished", dataIndex: "furnished", key: "furnished" },
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
      {
        title: "Room Code",
        dataIndex: "roomCode",
        key: "roomCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "room")}>{text}</a>
        ),
      },
      { title: "Description - Notes", dataIndex: "descriptionNotes", key: "descriptionNotes" },
      { title: "Room Status", dataIndex: "roomStatus", key: "roomStatus" },
      { title: "Area (sqm/sqft)", dataIndex: "area", key: "area" },
      { title: "Accessible for Disabled", dataIndex: "accessibleDisabled", key: "accessibleDisabled" },
      { title: "Date Available", dataIndex: "dateAvailable", key: "dateAvailable" },
      { title: "Date Vacant", dataIndex: "dateVacant", key: "dateVacant" },
      {
        title: "Tenant Code",
        dataIndex: "tenantCode",
        key: "tenantCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "tenant")}>{text}</a>
        ),
      },
    ],
    userDefinedFields: [
      { title: "Bedrooms", dataIndex: "bedrooms", key: "bedrooms" },
      { title: "Bathrooms", dataIndex: "bathrooms", key: "bathrooms" },
      { title: "Parking", dataIndex: "parking", key: "parking" },
      { title: "Appliance", dataIndex: "appliance", key: "appliance" },
      { title: "Furniture", dataIndex: "furniture", key: "furniture" },
      { title: "Utilities", dataIndex: "utilities", key: "utilities" },
      { title: "Other 1", dataIndex: "other1", key: "other1" },
      { title: "Other 2", dataIndex: "other2", key: "other2" },
      { title: "Other 3", dataIndex: "other3", key: "other3" },
    ],
    residentialRules: [
      { title: "Rule Type", dataIndex: "ruleType", key: "ruleType" },
    ],
    contacts: [
      {
        title: "Contact Code",
        dataIndex: "contactCode",
        key: "contactCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "contact")}>{text}</a>
        ),
      },
      { title: "Role", dataIndex: "role", key: "role" },
      { title: "Primary", dataIndex: "primary", key: "primary" },
      { title: "Company Name", dataIndex: "companyName", key: "companyName" },
      { title: "First Name", dataIndex: "firstName", key: "firstName" },
      { title: "Last Name", dataIndex: "lastName", key: "lastName" },
      { title: "Phone Number 1", dataIndex: "phoneNumber1", key: "phoneNumber1" },
      { title: "Phone Number 2", dataIndex: "phoneNumber2", key: "phoneNumber2" },
      { title: "Email", dataIndex: "email", key: "email" },
      { title: "Inactive Date", dataIndex: "inactiveDate", key: "inactiveDate" },
    ],
    academicTerms: [
      { title: "Academic Term Code", dataIndex: "academicTermCode", key: "academicTermCode" },
      { title: "Level", dataIndex: "level", key: "level" },
      { title: "Unit Override", dataIndex: "unitOverride", key: "unitOverride" },
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

      {/** Form for Basic Information */}
      <Form form={form} layout="vertical">
        <Divider>Basic Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
          {Object.entries(unitDetails).map(([key, value]) => (
            <Descriptions.Item
            label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            key={key}
          >
            {/* If it's a code field and not editing, render link */}
            {key.toLowerCase().includes("code") && !isEditing ? (
              <a
                style={{ color: "#1890ff" }}
                onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}
              >
                {value}
              </a>
            ) : isEditing ? (
              <Form.Item
                name={key}
                noStyle
                rules={[{ required: true, message: `${key} is required` }]}
              >
                {renderFieldByType(key, fieldConfig, form)}
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
        <TabPane tab="User Defined Fields" key="4">
          <Table dataSource={tabData.userDefinedFields} columns={tabColumns.userDefinedFields} pagination={false} />
        </TabPane>
        <TabPane tab="Residential - Rules" key="5">
          <Table dataSource={tabData.residentialRules} columns={tabColumns.residentialRules} pagination={false} />
        </TabPane>
        <TabPane tab="Contacts" key="6">
          <Table dataSource={tabData.contacts} columns={tabColumns.contacts} pagination={false} />
        </TabPane>
        <TabPane tab="Academic Terms" key="7">
          <Table dataSource={tabData.academicTerms} columns={tabColumns.academicTerms} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UnitDetails;
