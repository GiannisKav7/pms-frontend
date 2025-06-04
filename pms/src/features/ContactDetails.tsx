import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { renderFieldByType } from "../components/customFunctions/fieldRenderer";

const { TabPane } = Tabs;

export const contactFieldConfig = {
  contactCode: { type: "text" },
  firstName: { type: "text" },
  lastName: { type: "text" },
  salutation1: { type: "text" },
  salutation2: { type: "text" },
  companyName: { type: "text" },
  description: { type: "text" },
  title: { type: "text" },
  url: { type: "text" },
  address1: { type: "text" },
  address2: { type: "text" },
  address3: { type: "text" },
  address4: { type: "text" },
  city: {
    type: "select",
    options: [
      { label: "Athens", value: "Athens" },
      { label: "Thessaloniki", value: "Thessaloniki" },
    ],
  },
  countyMunicipality: {
    type: "select",
    options: [
      { label: "County1", value: "County1" },
      { label: "County2", value: "County2" },
    ],
  },
  prefecture: {
    type: "select",
    options: [
      { label: "Attica", value: "Attica" },
      { label: "Central Macedonia", value: "Central Macedonia" },
    ],
  },
  region: {
    type: "select",
    options: [
      { label: "Southern Greece", value: "Southern Greece" },
      { label: "Northern Greece", value: "Northern Greece" },
    ],
  },
  postcode: { type: "text" },
  country: {
    type: "select",
    options: [
      { label: "Greece", value: "Greece" },
      { label: "Other", value: "Other" },
    ],
  },
};

interface Contact {
  contactCode: string;
  firstName: string;
  lastName: string;
  salutation1: string;
  salutation2: string;
  companyName: string;
  description: string;
  title: string;
  url: string;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  city: string;
  countyMunicipality: string;
  prefecture: string;
  region: string;
  postcode: string;
  country: string;
  office: string;
  home: string;
  fax: string;
  mobile: string;
  pager: string;
  secretary: string;
  other1: string;
  other2: string;
  other3: string;
  other4: string;
  email: string;
  alternateEmail: string;
  contactNotes: string;
}

const initialDetails: Contact = {
  contactCode: "C-001",
  firstName: "John",
  lastName: "Doe",
  salutation1: "Mr.",
  salutation2: "",
  companyName: "Alpha Corp",
  description: "Main contact for Alpha Corp",
  title: "Manager",
  url: "https://www.alphacorp.com",
  address1: "123 Main Street",
  address2: "Suite 500",
  address3: "",
  address4: "",
  city: "Athens",
  countyMunicipality: "",
  prefecture: "Attica",
  region: "Southern Greece",
  postcode: "12345",
  country: "Greece",
  office: "+30 210 1234567",
  home: "",
  fax: "+30 210 7654321",
  mobile: "+30 690 9876543",
  pager: "",
  secretary: "Ms. Smith",
  other1: "",
  other2: "",
  other3: "",
  other4: "",
  email: "john.doe@alphacorp.com",
  alternateEmail: "j.doe@alphacorp.com",
  contactNotes: "Available during office hours",
};

const ContactDetails: React.FC = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [form] = Form.useForm<Contact>();
  const [details, setDetails] = useState<Contact>(initialDetails);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(details);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values: Contact) => {
      setDetails(values);
      setIsEditing(false);
    });
  };

  const handleNavigation = (code: any, path: string): void => {
    navigate(`/${path}/${code}`);
  };

  const contactTypeAssociationData = [
    { key: "1", role: "Manager" },
    { key: "2", role: "Assistant" },
  ];

  const contactTypeColumns = [
    { title: "Role", dataIndex: "role", key: "role" },
  ];

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Contact Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        {/* GROUP 1: First ~8 fields */}
        <Divider>Contact Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: 0, borderRadius: 8 }}>
          {Object.entries(details).slice(0, 8).map(([key, value]) => (
            <Descriptions.Item
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              key={key}
            >
              {key.toLowerCase().includes("code") && !isEditing ? (
                <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}>
                  {value}
                </a>
              ) : isEditing ? (
                <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                  {renderFieldByType(key, contactFieldConfig)}
                </Form.Item>
              ) : (
                <span style={{ color: "#595999" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>

        {/* GROUP 2: Next ~7 fields (8..15) */}
        <Divider>Address</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: 0, borderRadius: 8 }}>
          {Object.entries(details).slice(8, 15).map(([key, value]) => (
            <Descriptions.Item
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              key={key}
            >
              {isEditing ? (
                <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                  {renderFieldByType(key, contactFieldConfig)}
                </Form.Item>
              ) : (
                <span style={{ color: "#595999" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>

        {/* GROUP 3: Remainder of fields */}
        <Divider>Contact Details</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: 0, borderRadius: 8 }}>
          {Object.entries(details).slice(15).map(([key, value]) => (
            <Descriptions.Item
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              key={key}
            >
              {isEditing ? (
                <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                  {renderFieldByType(key, contactFieldConfig)}
                </Form.Item>
              ) : (
                <span style={{ color: "#595999" }}>{value}</span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Form>

      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}></Tabs>
        <TabPane tab="Contact Type Association" key="1">
          <Table dataSource={contactTypeAssociationData} columns={contactTypeColumns} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContactDetails;
