import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";

const Dashboard = () =>{

    const initialDetails = {
        leaseCode: "LC-001",
        leaseName: "Office Lease - Main Street",
        customerCode: "CUST-123 (Ενοικιαστής)",
        leaseType: "Commercial",
        status: "Active",

    }

    const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();
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
            <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
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
                    <span style={{ color: "#595999" }}>{value}</span>
                  )}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Form>
          
        </div>
      );
}

export default Dashboard;