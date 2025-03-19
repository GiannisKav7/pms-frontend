import React, { useState } from "react";
import { Button, Form, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import RentChargesTable from "../components/Lease/Tables/RentChargesTable";
import UnitTable from "../components/Lease/Tables/UnitTable";
import AmendmentsTable from "../components/Lease/Tables/AmendmentsTable";
import ClausesTable from "../components/Lease/Tables/ClausesTable";
import OptionsTable from "../components/Lease/Tables/OptionsTable";
import ContactsTable from "../components/Lease/Tables/ContactsTable";
import Sidebar from "../components/Layouts/Sidebar"; // Using Sidebar as props-based menu
import { getTabColumns } from "../config/leaseTabColumns";
import LeaseOverviewContent from "../components/Lease/LeaseOverviewContent";
import LeaseBasicInfoBar from "../components/Lease/LeaseBasicInfoBar";

const { Sider, Content } = Layout;

const overviewGroups = [
  {
    title: "Property Info",
    fields: ["propertyCode", "ownerCode", "contractedArea", "atRisk"],
  },
  {
    title: "Rent Info",
    fields: ["rentYearly", "rentPerSqmMonthly", "rentPerSqmYearly"],
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
        return <UnitTable />;
      case "chargeSchedules":
        return <RentChargesTable />;
      case "amendments":
        return <AmendmentsTable />;
      case "clauses":
        return <ClausesTable />;
      case "options":
        return <OptionsTable />;
      case "contacts":
        return <ContactsTable />;
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
          onCollapse={setSidebarCollapsed}
          trigger={
            sidebarCollapsed ? (
              <MenuUnfoldOutlined style={{ color: "#fa8c16", fontSize: "18px" }} />
            ) : (
              <MenuFoldOutlined style={{ color: "#fa8c16", fontSize: "18px" }} />
            )
          }
          width={200}
          className="site-layout-background"
        >
          <Sidebar
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
