import React, { useState } from "react";
import { Row, Col, Card, Table, Button, Form, Divider, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import RentChargesTable from "./RentChargesTable";
import LeaseDetailsSidebar from "./LeaseDetailsSidebar";
import { fieldConfig } from "../../config/leaseConfig";
import { tabData } from "../../config/leaseTabData";
import { getTabColumns } from "../../config/leaseTabColumns";
import { renderFieldByType } from "../customFunctions/fieldRenderer"; // Custom Field Renderer

const { Sider, Content } = Layout;
// You can place this near the top of your file:
const overviewGroups = [
  {
    title: "Basic Info",
    fields: [
      "leaseCode",
      "leaseName",
      "customerCode",
      "leaseType",
      "status",
      "atRisk",
    ],
  },
  {
    title: "Property Info",
    fields: ["propertyCode", "ownerCode", "contractedArea"],
  },
  {
    title: "Rent Info",
    fields: [
      "rentMonthly",
      "rentYearly",
      "rentPerSqmMonthly",
      "rentPerSqmYearly",
    ],
  },
  {
    title: "Key Dates",
    fields: [
      "leaseFromDate",
      "leaseToDate",
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
    form.resetFields(); // Reset any unsaved changes
    setIsEditing(false); // Revert back to read-only mode
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
            {/* Grid container for cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
              }}
            >
              {overviewGroups.map((group) => (
                <Card key={group.title} title={group.title}>
                  <Row gutter={16}>
                  {group.fields.map((fieldKey) => {
                    const label = fieldKey
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase());
                    const fieldValue = leaseDetails[fieldKey];
                    const fieldCfg = fieldConfig[fieldKey] || {};
                    
                    const isNumberField = fieldCfg.type === "number";
                    const isDateField = fieldCfg.type === "date";
                    
                    let displayValue;
                    
                    if (isDateField) {
                      displayValue = fieldValue
                        ? dayjs(fieldValue).format(fieldCfg.format || 'DD/MM/YYYY')
                        : "";
                    } else if (isNumberField) {
                      displayValue = `${fieldCfg.prefix ? fieldCfg.prefix + " " : ""}${Number(fieldValue).toLocaleString()}`;
                    } else {
                      displayValue = `${fieldValue}`;
                    }
                    
                    return (
                      <Col span={24} key={fieldKey}>
                        {isEditing ? (
                          <Form.Item
                            label={label}
                            name={fieldKey}
                            rules={[{ required: true, message: `${label} is required` }]}
                            valuePropName={fieldCfg.type === "switch" ? "checked" : undefined}
                          >
                            {renderFieldByType(fieldKey, fieldConfig, form)}
                          </Form.Item>
                        ) : (
                          <div style={{ marginBottom: 16 }}>
                            <div style={{ fontWeight: "bold", marginBottom: 4 }}>
                              {label}
                            </div>
                            <div style={{ color: "#595959" }}>
                              {displayValue}
                            </div>
                          </div>
                        )}
                      </Col>
                    );
                  })}
                  </Row>
                </Card>
              ))}
            </div>
          </Form>
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
      <Layout style={{ padding: "0 0px 0px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "#f0f2f5", // grey background for contrast
          }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
            <h2 style={{ margin: 0 }}>Lease Details</h2>
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
