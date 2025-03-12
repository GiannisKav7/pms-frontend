import React, { useState } from "react";
import { Row, Col, Card, Table, Button, Form, Divider, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import RentChargesTable from "./RentChargesTable";
import LeaseDetailsSidebar from "./LeaseDetailsSidebar";
import { tabData } from "../../config/leaseTabData";
import { getTabColumns } from "../../config/leaseTabColumns";
import LeaseOverviewContent from "./LeaseOverviewContent";
import LeaseBasicInfoBar from "./LeaseBasicInfoBar";

const { Sider, Content } = Layout;

const overviewGroups = [
  {
    title: "Property Info",
    fields: [
      "propertyCode",
      "ownerCode", 
      "contractedArea",
      "atRisk"],
  },
  {
    title: "Rent Info",
    fields: [
      "rentYearly",
      "rentPerSqmMonthly",
      "rentPerSqmYearly",
    ],
  },
  {
    title: "Key Dates",
    fields: [
      "moveInDate",
      "moveOutDate",
      "lastRenewalDate",
      "signDate",
      "nextBreakDate",
      "nextRentReviewDate",
    ],
  },
  {
    title: "Security/Deposits",
    fields: [
      "security",
      "depositsRequired",
      "depositsBilled",
      "depositsReceived",
    ],
  },
];

const LeaseDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const tabColumns = getTabColumns((code, path) => handleNavigation(code, path));

  const initialDetails = {
    leaseCode: "LC-001",
    leaseName: "Office Lease - Main Street",
    customerCode: "CUST-123",
    leaseType: "Commercial",
    status: "Active",
    atRisk: "No",
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
      const dateFields = [
        "leaseFromDate",
        "leaseToDate",
        "moveInDate",
        "moveOutDate",
        "lastRenewalDate",
        "signDate",
        "nextBreakDate",
        "nextRentReviewDate",
      ];
      dateFields.forEach((field) => {
        if (values[field]) {
          values[field] = values[field].format("YYYY-MM-DD");
        }
      });
      setLeaseDetails(values);
      setIsEditing(false);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsEditing(false);
  };

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "overview":
        return (
          <LeaseOverviewContent
            form={form}
            overviewGroups={overviewGroups}
            leaseDetails={leaseDetails}
          />
        );
      case "units":
        return (
          <Table
            dataSource={tabData.units}
            columns={tabColumns.units}
            pagination={false}
          />
        );
      case "chargeSchedules":
        return <RentChargesTable />;
      case "amendments":
        return (
          <Table
            dataSource={tabData.amendments}
            columns={tabColumns.amendments}
            pagination={false}
          />
        );
      case "clauses":
        return (
          <Table
            dataSource={tabData.clauses}
            columns={tabColumns.clauses}
            pagination={false}
          />
        );
      case "options":
        return (
          <Table
            dataSource={tabData.options}
            columns={tabColumns.options}
            pagination={false}
          />
        );
      case "contacts":
        return (
          <Table
            dataSource={tabData.contacts}
            columns={tabColumns.contacts}
            pagination={false}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div style={{ background: "#fff" }}>
        <LeaseBasicInfoBar leaseDetails={leaseDetails} />
      </div>
      <Layout style={{ padding: "0 0px 0px" }}>
        <Sider
          collapsible
          collapsed={sidebarCollapsed}
          onCollapse={(collapsed) => setSidebarCollapsed(collapsed)}
          width={200}
          className="site-layout-background"
        >
          <LeaseDetailsSidebar
            selectedMenuItem={selectedMenuItem}
            setSelectedMenuItem={setSelectedMenuItem}
          />
        </Sider>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "#f0f2f5",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
                {sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              </Button>
              {isEditing ? (
                <>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button type="primary" onClick={handleSave}>
                    Save
                  </Button>
                </>
              ) : (
                <Button type="primary" onClick={handleEditToggle}>
                  Edit
                </Button>
              )}
            </div>
          </div>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeaseDetails;
