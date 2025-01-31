import React, { useState } from "react";
import {Descriptions, Tabs, Table, Button, Form, Divider,} from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import { renderFieldByType } from "../customFunctions/fieldRenderer";

const { TabPane } = Tabs;

// Field config with numeric, date, radio, etc.
const fieldConfig = {
  leaseType: {
    type: 'select',
    options: [
      { label: 'Commercial', value: 'Commercial' },
      { label: 'Residential', value: 'Residential' },
    ]
  },
  status: {
    type: 'radio',
    options: [
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' }
    ]
  },
  atRisk: {
    type: 'radio',
    options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ]
  },
  contractedArea: {
    type: 'number',
    min: 0,
    step: 1,
    prefix: 'sqm',
  },
  rentMonthly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  rentYearly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  rentPerSqmMonthly: {
    type: 'number',
    min: 0,
    step: 1,
    prefix: '€/sqm',
  },
  rentPerSqmYearly: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€/sqm',
  },
  leaseFromDate: { type: 'date' },
  leaseToDate: { type: 'date' },
  moveInDate: { type: 'date' },
  moveOutDate: { type: 'date' },
  lastRenewalDate: { type: 'date' },
  signDate: { type: 'date' },
  nextBreakDate: { type: 'date' },
  nextRentReviewDate: { type: 'date' },
  security: {
    type: 'switch',
  },
  depositsRequired: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  depositsBilled: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
  depositsReceived: {
    type: 'number',
    min: 0,
    step: 10,
    prefix: '€',
  },
};

const LeaseDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // Updated numeric fields to plain numbers
  // atRisk => "Yes" / "No" to align with radio
  const initialDetails = {
    leaseCode: "LC-001",
    leaseName: "Office Lease - Main Street",
    customerCode: "CUST-123",
    leaseType: "Commercial",
    status: "Active",
    atRisk: "No", // or "Yes"
    propertyCode: "PROP-456",
    ownerCode: "Holdings Kavvetsos IKE",
    contractedArea: 150,
    rentMonthly: 1200,
    rentYearly: 14400,
    rentPerSqmMonthly: 8,
    rentPerSqmYearly: 96,
    leaseFromDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    leaseToDate: dayjs("2024-01-01", "YYYY-MM-DD"),
    moveInDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    moveOutDate: null,
    lastRenewalDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    signDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    nextBreakDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    nextRentReviewDate: dayjs("2023-01-01", "YYYY-MM-DD"),
    security: true,
    depositsRequired: 2400,
    depositsBilled: 2400,
    depositsReceived: 2400,
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
      // Convert dayjs -> string if needed
      const dateFields = [
        'leaseFromDate','leaseToDate','moveInDate','moveOutDate',
        'lastRenewalDate','signDate','nextBreakDate','nextRentReviewDate'
      ];
      dateFields.forEach(field => {
        if (values[field]) {
          values[field] = values[field].format("YYYY-MM-DD");
        }
      });

      setLeaseDetails(values);
      setIsEditing(false);
    });
  };

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  // Tab data/columns unchanged...
  const tabData = {
    units: [
      { key: "1", unitCode: "101", buildingCode: "B-001", floorCode: "F-001", name: "Unit A", location: "North Wing", fromDate: "2023-01-01", toDate: "2023-12-31", movingInDate: "2023-01-15", movingOutDate: "2023-12-15" },
      { key: "2", unitCode: "102", buildingCode: "B-002", floorCode: "F-002", name: "Unit B", location: "South Wing", fromDate: "2023-01-01", toDate: "2023-12-31", movingInDate: "2023-01-20", movingOutDate: "2023-12-20" },
    ],
    chargeSchedules: [
      { key: "1", chargeType: "Rent", chargeCode: "CH-001", from: "2023-01-01", toInactive: "2023-12-31", amount: "$1200", currency: "USD", amountPerContrArea: "$8", amountPeriod: "Monthly", units: "Unit A", view: "View Details" },
      { key: "2", chargeType: "Maintenance", chargeCode: "CH-002", from: "2023-01-01", toInactive: "2023-12-31", amount: "$100", currency: "USD", amountPerContrArea: "$0.5", amountPeriod: "Monthly", units: "Unit B", view: "View Details" },
    ],
    amendments: [
      { key: "1", type: "Extension", status: "Approved", dateFrom: "2024-01-01", dateTo: "2024-12-31", period: "12 months", description: "Lease extended by one year." },
    ],
    clauses: [
      { key: "1", name: "No Pets", description: "No pets allowed in the premises.", date: "2023-01-01", endDate: "2023-12-31", reference: "CL-001", units: "Unit A" },
    ],
    options: [
      { key: "1", type: "Renewal", status: "Available", expirationDate: "2024-06-01", noticeDate: "2024-03-01", description: "Option to renew for another year.", units: "Unit A", area: "150 sqm" },
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
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "unit")}>
            {text}
          </a>
        ),
      },
      { title: "Building Code", dataIndex: "buildingCode", key: "buildingCode" },
      { title: "Floor Code", dataIndex: "floorCode", key: "floorCode" },
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Location", dataIndex: "location", key: "location" },
      { title: "From Date", dataIndex: "fromDate", key: "fromDate" },
      { title: "To Date", dataIndex: "toDate", key: "toDate" },
      { title: "Moving in Date", dataIndex: "movingInDate", key: "movingInDate" },
      { title: "Moving out Date", dataIndex: "movingOutDate", key: "movingOutDate" },
    ],
    chargeSchedules: [
      { title: "Charge Type", dataIndex: "chargeType", key: "chargeType" },
      { title: "Charge Code", dataIndex: "chargeCode", key: "chargeCode" },
      { title: "From", dataIndex: "from", key: "from" },
      { title: "To/Inactive", dataIndex: "toInactive", key: "toInactive" },
      { title: "Amount", dataIndex: "amount", key: "amount" },
      { title: "Currency", dataIndex: "currency", key: "currency" },
      { title: "Amount/Contr.Area ($/sqm)", dataIndex: "amountPerContrArea", key: "amountPerContrArea" },
      { title: "Amount Period", dataIndex: "amountPeriod", key: "amountPeriod" },
      { title: "Unit(s)", dataIndex: "units", key: "units" },
      { title: "View", dataIndex: "view", key: "view" },
    ],
    amendments: [
      { title: "Type", dataIndex: "type", key: "type" },
      { title: "Status", dataIndex: "status", key: "status" },
      { title: "Date From", dataIndex: "dateFrom", key: "dateFrom" },
      { title: "Date To", dataIndex: "dateTo", key: "dateTo" },
      { title: "Period", dataIndex: "period", key: "period" },
      { title: "Description (Notes)", dataIndex: "description", key: "description" },
    ],
    clauses: [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Description", dataIndex: "description", key: "description" },
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "End Date", dataIndex: "endDate", key: "endDate" },
      { title: "Reference", dataIndex: "reference", key: "reference" },
      { title: "Unit(s)", dataIndex: "units", key: "units" },
    ],
    options: [
      { title: "Type", dataIndex: "type", key: "type" },
      { title: "Status", dataIndex: "status", key: "status" },
      { title: "Expirations Date", dataIndex: "expirationDate", key: "expirationDate" },
      { title: "Notice Date", dataIndex: "noticeDate", key: "noticeDate" },
      { title: "Description (Notes)", dataIndex: "description", key: "description" },
      { title: "Unit(s)", dataIndex: "units", key: "units" },
      { title: "Area (sqm)", dataIndex: "area", key: "area" },
    ],
    contacts: [
      {
        title: "Contact Code",
        dataIndex: "contactCode",
        key: "contactCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "contact")}>\n            {text}
          </a>
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
      <div
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}
      >
        <h2 style={{ margin: 0 }}>Lease Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>

      <Form form={form} layout="vertical">
        <Divider>Lease Information</Divider>
        <Descriptions
          bordered
          column={2}
          style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}
        >
          {Object.entries(leaseDetails).map(([key, value]) => (
            <Descriptions.Item
              label={key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              key={key}
            >
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
                  // For Switch, ensure we tie form item to 'checked' if we do not handle it manually
                  valuePropName={fieldConfig[key]?.type === 'switch' ? 'checked' : undefined}
                >
                  {renderFieldByType(key, fieldConfig, form)}
                </Form.Item>
              ) : (
                <span style={{ color: "#595959" }}>
                  {typeof value === "number"
                    ? value.toLocaleString()
                    : `${value}`}
                </span>
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