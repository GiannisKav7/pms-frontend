import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";

const { TabPane } = Tabs;

const LeaseDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

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

  const tabData = {
    units: [
      { key: "1", UnitCode: "101", type: "Apartment", size: "120 sqm" },
      { key: "2", UnitCode: "102", type: "Office", size: "300 sqm" },
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
      { key: "1", name: "John Doe", role: "Tenant", phone: "123-456-7890" },
      { key: "2", name: "Jane Smith", role: "Landlord", phone: "987-654-3210" },
    ],
  };

  const tabColumns = {
    units: [
      { title: "Unit Code", dataIndex: "unitCode", key: "unitCode" },
      { title: "Building code", dataIndex: "buildingCode", key: "buildingCode" },
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
      { title: "Contact Code", dataIndex: "contactCode", key: "contactCode" },
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