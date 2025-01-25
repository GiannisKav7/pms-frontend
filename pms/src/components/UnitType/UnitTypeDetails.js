import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const UnitTypeDetails = () => {
  const initialDetails = {
    unitTypeCode: "UT-001",
    propertyCode: "P-001",
    description: "Luxury Apartment",
    bedrooms: "3",
    bathrooms: "2",
    rent: "$1500",
    deposit: "$3000",
    minimumRent: "$1200",
    maximumRent: "$2000",
    totalUnits: "50",
    totalRooms: "150",
    totalBeds: "200",
    category: "Residential",
    type: "Apartment",
    features: "Pool, Gym, Parking",
    options: "Furnished, Pet-friendly",
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

  const moveInChargesData = [
    {
      key: "1",
      description: "Cleaning Fee",
      chargeCode: "C-001",
      chargeDescription: "One-time cleaning fee",
      amount: "$200",
      tax: "Yes",
      rec: "Yes",
      req: "Yes",
      mod: "No",
      monthsToStart: "1",
      duration: "12",
    },
  ];

  const moveOutChargesData = [
    {
      key: "1",
      description: "Damage Fee",
      chargeCode: "C-002",
      chargeDescription: "Fee for damages",
      amount: "$500",
      instances: "2",
      tax: "Yes",
      req: "Yes",
      mod: "No",
    },
  ];

  const applicationChargesData = [
    {
      key: "1",
      description: "Application Fee",
      chargeCode: "C-003",
      chargeDescription: "Non-refundable application fee",
      amount: "$50",
      tax: "Yes",
      rec: "No",
      req: "Yes",
      mod: "No",
      roommate: "No",
      spouse: "Yes",
      guarantor: "Yes",
    },
  ];

  const academicTermsData = [
    {
      key: "1",
      academicTerm: "Fall 2024",
      startDate: "2024-09-01",
      endDate: "2024-12-15",
      viewEdit: "View/Edit",
    },
  ];

  const tabColumns = {
    moveInCharges: [
      { title: "Description", dataIndex: "description", key: "description" },
      {
        title: "Charge Code",
        dataIndex: "chargeCode",
        key: "chargeCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "charge")}>{text}</a>
        ),
      },
      { title: "Charge Description", dataIndex: "chargeDescription", key: "chargeDescription" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Tax (Yes/No)", dataIndex: "tax", key: "tax" },
      { title: "Rec (Yes/No)", dataIndex: "rec", key: "rec" },
      { title: "Req (Yes/No)", dataIndex: "req", key: "req" },
      { title: "Mod (Yes/No)", dataIndex: "mod", key: "mod" },
      { title: "Months to Start", dataIndex: "monthsToStart", key: "monthsToStart" },
      { title: "Duration", dataIndex: "duration", key: "duration" },
    ],
    moveOutCharges: [
      { title: "Description", dataIndex: "description", key: "description" },
      {
        title: "Charge Code",
        dataIndex: "chargeCode",
        key: "chargeCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "charge")}>{text}</a>
        ),
      },
      { title: "Charge Description", dataIndex: "chargeDescription", key: "chargeDescription" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Instances", dataIndex: "instances", key: "instances" },
      { title: "Tax (Yes/No)", dataIndex: "tax", key: "tax" },
      { title: "Req (Yes/No)", dataIndex: "req", key: "req" },
      { title: "Mod (Yes/No)", dataIndex: "mod", key: "mod" },
    ],
    applicationCharges: [
      { title: "Description", dataIndex: "description", key: "description" },
      {
        title: "Charge Code",
        dataIndex: "chargeCode",
        key: "chargeCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "charge")}>{text}</a>
        ),
      },
      { title: "Charge Description", dataIndex: "chargeDescription", key: "chargeDescription" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Tax (Yes/No)", dataIndex: "tax", key: "tax" },
      { title: "Rec (Yes/No)", dataIndex: "rec", key: "rec" },
      { title: "Req (Yes/No)", dataIndex: "req", key: "req" },
      { title: "Mod (Yes/No)", dataIndex: "mod", key: "mod" },
      { title: "Roommate (Yes/No)", dataIndex: "roommate", key: "roommate" },
      { title: "Spouse (Yes/No)", dataIndex: "spouse", key: "spouse" },
      { title: "Guarantor (Yes/No)", dataIndex: "guarantor", key: "guarantor" },
    ],
    academicTerms: [
      { title: "Academic Term", dataIndex: "academicTerm", key: "academicTerm" },
      { title: "Start Date", dataIndex: "startDate", key: "startDate" },
      { title: "End Date", dataIndex: "endDate", key: "endDate" },
      { title: "View/Edit", dataIndex: "viewEdit", key: "viewEdit" },
    ],
  };

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Unit Type Details</h2>
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
              ) : isEditing ? (
                <Form.Item
                  name={key}
                  noStyle
                  rules={[{ required: true, message: `${key} is required` }]}
                >
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
        <TabPane tab="Move-in Charges" key="1">
          <Table dataSource={moveInChargesData} columns={tabColumns.moveInCharges} pagination={false} />
        </TabPane>
        <TabPane tab="Move-out Charges" key="2">
          <Table dataSource={moveOutChargesData} columns={tabColumns.moveOutCharges} pagination={false} />
        </TabPane>
        <TabPane tab="Application Charges" key="3">
          <Table dataSource={applicationChargesData} columns={tabColumns.applicationCharges} pagination={false} />
        </TabPane>
        <TabPane tab="Academic Terms" key="4">
          <Table dataSource={academicTermsData} columns={tabColumns.academicTerms} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UnitTypeDetails;
