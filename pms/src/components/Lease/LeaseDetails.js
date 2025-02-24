import React, { useState } from "react";
import { Descriptions, Table, Button, Form, Divider, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import LeaseDetailsSidebar from "./LeaseDetailsSidebar";
import LeaseDetailsBasicInfo from "./LeaseDetailsBasicInfo";
import { fieldConfig } from "../../config/leaseConfig";
import { tabData } from "../../config/leaseTabData";
import { getTabColumns } from "../../config/leaseTabColumns";
import { renderFieldByType } from "../customFunctions/fieldRenderer"; // Custom Field Renderer

const { Sider, Content } = Layout;

const LeaseDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState("overview");

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
  
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "overview":
        return (
          <Form form={form} layout="vertical">
            <Divider>Lease Information</Divider>
            <Descriptions bordered column={2} style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
              {Object.entries(leaseDetails).map(([key, value]) => (
                <Descriptions.Item label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} key={key}>
                  {isEditing ? (
                    <Form.Item
                      name={key}
                      noStyle
                      rules={[{ required: true, message: `${key} is required` }]}
                      valuePropName={fieldConfig[key]?.type === "switch" ? "checked" : undefined}
                    >
                      {renderFieldByType(key, fieldConfig, form)}
                    </Form.Item>
                  ) : (
                    <span style={{ color: "#595959" }}>
                      {typeof value === "number" ? value.toLocaleString() : `${value}`}
                    </span>
                  )}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Form>
        );
      case "units":
        return <Table dataSource={tabData.units} columns={tabColumns.units} pagination={false} />;
      case "chargeSchedules":
        return <Table dataSource={tabData.chargeSchedules} columns={tabColumns.chargeSchedules} pagination={false} />;
      case "amendments":
        return <Table dataSource={tabData.amendments} columns={tabColumns.amendments} pagination={false} />;
      case "clauses":
        return <Table dataSource={tabData.clauses} columns={tabColumns.clauses} pagination={false} />;
      case "options":
        return <Table dataSource={tabData.options} columns={tabColumns.options} pagination={false} />;
      case "contacts":
        return <Table dataSource={tabData.contacts} columns={tabColumns.contacts} pagination={false} />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <LeaseDetailsSidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ margin: 0 }}>Lease Details</h2>
            <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeaseDetails;
