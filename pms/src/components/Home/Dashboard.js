import React, { useState } from "react";
import { Descriptions, Button, Input, Form, Divider, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const initialDetails = {
    leaseCode: "LC-001",
    leaseName: "Office Lease - Main Street",
    customerCode: "CUST-123 (Ενοικιαστής)",
    leaseType: "Commercial",
    status: "Active",
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

  const pages = [
    { title: "Lease Page", path: "/lease/1" },
    { title: "Unit Page", path: "/unit/1" },
    { title: "Legal Entity Owner Page", path: "/legalentity/1" },
    { title: "Contact Page", path: "/contact/1" },
    { title: "Property Page", path: "/property/1" },
    { title: "Room Page", path: "/room/1" },
    { title: "Building Page", path: "/building/1" },
    { title: "Floor Page", path: "/floor/1" },
    { title: "Unit Type Page", path: "/unittype/1" },
  ];

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Dashboard</h1>
      <Row gutter={[16, 16]}>
        {pages.map((page) => (
          <Col xs={24} sm={12} md={8} lg={6} key={page.path}>
            <Card hoverable style={{ textAlign: "center" }}>
              <h3>{page.title}</h3>
              <Button type="primary" onClick={() => navigate(page.path)}>
                Go to {page.title}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Divider>Lease Information</Divider>
      <div style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
        <Form form={form} layout="vertical">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ margin: 0 }}>Lease Details</h2>
            <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
          <Descriptions bordered column={2}>
            {Object.entries(leaseDetails).map(([key, value]) => (
              <Descriptions.Item label={key.replace(/([A-Z])/g, " $1")} key={key}>
                {isEditing ? (
                  <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                    <Input style={{ margin: "4px 0" }} />
                  </Form.Item>
                ) : (
                  <span style={{ color: "#595999" }}>{value}</span>
                )}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
