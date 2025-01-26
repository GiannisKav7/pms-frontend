import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const LeaseDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const initialDetails = {
    leaseCode: "LC-001",
    leaseName: "Office Lease - Main Street",
    customerCode: "CUST-123 (Ενοικιαστής)",
    leaseType: "Commercial",
    status: "Active",
    atRisk: "No",
    propertyCode: "PROP-456",
    ownerCode: "Holdings Kavvetsos IKE",
    contractedArea: "150 sqm / 1,614 ft²",
    rentMonthly: "$1,200 / month",
    rentYearly: "$14,400 / year",
    rentPerSqmMonthly: "$8 / sqm",
    rentPerSqmYearly: "$96 / sqm",
    leaseFromDate: "2023-01-01",
    leaseToDate: "2024-01-01",
    moveInDate: "2023-01-01",
    moveOutDate: "N/A",
    lastRenewalDate: "2023-12-01",
    signDate: "2022-12-15",
    nextBreakDate: "2024-06-01",
    nextRentReviewDate: "2024-12-01",
    security: "Yes",
    depositsRequired: "$2,400 (Εγγύηση)",
    depositsBilled: "$2,400",
    depositsReceived: "$2,400",
  };

  const [leaseDetails, setLeaseDetails] = useState(initialDetails);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(leaseDetails);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setLeaseDetails(values);
      setIsEditing(false);
    });
  };

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  const tabData = {
    units: [
      { key: "1", unitCode: "101", type: "Apartment", size: "120 sqm" },
      { key: "2", unitCode: "102", type: "Office", size: "300 sqm" },
    ],
    chargeSchedules: [
      { key: "1", chargeType: "Rent", amount: "$1200", frequency: "Monthly" },
      { key: "2", chargeType: "Maintenance", amount: "$100", frequency: "Monthly" },
    ],
    amendments: [
      { key: "1", amendment: "Extended Lease", date: "2023-06-01" },
    ],
    clauses: [
      { key: "1", clause: "No pets allowed", description: "Strictly no pets." },
    ],
    options: [
      { key: "1", option: "Renewal", details: "Renewable every 12 months." },
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
      {
        key: "2",
        contactCode: "C-002",
        role: "Tenant",
        primary: "No",
        companyName: "Beta Ltd",
        firstName: "Jane",
        lastName: "Smith",
        phoneNumber1: "+30 210 9876543",
        phoneNumber2: "+30 210 1239876",
        email: "jane.smith@betaltd.com",
        inactiveDate: "N/A",
      },
    ],
  };

  const tabColumns = {
    units: [
      {
        title: "Unit Code",
        dataIndex: "unitCode",
        key: "unitCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "unit")}>{text}</a>
        ),
      },
      { title: "Type", dataIndex: "type", key: "type" },
      { title: "Size", dataIndex: "size", key: "size" },
    ],
    chargeSchedules: [
      { title: "Charge Type", dataIndex: "chargeType", key: "chargeType" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Frequency", dataIndex: "frequency", key: "frequency" },
    ],
    amendments: [
      { title: "Amendment", dataIndex: "amendment", key: "amendment" },
      { title: "Date", dataIndex: "date", key: "date" },
    ],
    clauses: [
      { title: "Clause", dataIndex: "clause", key: "clause" },
      { title: "Description", dataIndex: "description", key: "description" },
    ],
    options: [
      { title: "Option", dataIndex: "option", key: "option" },
      { title: "Details", dataIndex: "details", key: "details" },
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
  };

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Lease Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        <Divider>Lease Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
          {Object.entries(leaseDetails).map(([key, value]) => (
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
                <span style={{ color: "#595959" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Form>
      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
        <TabPane tab="Unit(s)" key="1">
          <Table dataSource={tabData.units} columns={tabColumns.units} pagination={false} />
        </TabPane>
        <TabPane tab="Charge Schedules" key="2">
          <Table dataSource={tabData.chargeSchedules} columns={tabColumns.chargeSchedules} pagination={false} />
        </TabPane>
        <TabPane tab="Amendments" key="3">
          <Table dataSource={tabData.amendments} columns={tabColumns.amendments} pagination={false} />
        </TabPane>
        <TabPane tab="Clauses" key="4">
          <Table dataSource={tabData.clauses} columns={tabColumns.clauses} pagination={false} />
        </TabPane>
        <TabPane tab="Options" key="5">
          <Table dataSource={tabData.options} columns={tabColumns.options} pagination={false} />
        </TabPane>
        <TabPane tab="Contacts" key="6">
          <Table dataSource={tabData.contacts} columns={tabColumns.contacts} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LeaseDetails;
