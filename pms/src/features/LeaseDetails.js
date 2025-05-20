import React, { useState } from "react";
import {Form, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import RentChargesTable from "../components/Lease/Tables/RentChargesTable";
import UnitTable from "../components/Lease/Tables/UnitTable";
import AmendmentsTable from "../components/Lease/Tables/AmendmentsTable";
import ClausesTable from "../components/Lease/Tables/ClausesTable";
import OptionsTable from "../components/Lease/Tables/OptionsTable";
import ContactsTable from "../components/Lease/Tables/ContactsTable";
import Sidebar from "../components/Layouts/Sidebar";
import { getTabColumns } from "../config/leaseTabColumns";
import LeaseOverviewContent from "../components/Lease/LeaseOverviewContent";
import LeaseBasicInfoBar from "../components/Lease/LeaseBasicInfoBar";
import styles from "./LeaseDetails.module.css";

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
    fields: ["security", "depositsRequired", "depositsBilled", "depositsReceived"],
  },
  {
    title: "Customer Info",
    fields: ["type", "name", "firstName", "lastName", "taxid"]
  }
];

const LeaseDetails = () => {
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
    security: "Yes",
    depositsRequired: 2400,
    depositsBilled: 2400,
    depositsReceived: 2400,
    type: "Legal Entity",
    name: "Alpha Real Estate Management S.A.",
    taxid:"1023664",
  };

  const [leaseDetails, setLeaseDetails] = useState(initialDetails);

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
    <Layout className={styles.container}>
      <div className={styles.header}>
        <LeaseBasicInfoBar leaseDetails={leaseDetails} />
      </div>
      <Layout>
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
        <Content className={styles.content}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeaseDetails;
