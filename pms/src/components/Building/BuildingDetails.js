import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const BuildingDetails = () => {
  const initialDetails = {
    propertyCode: "P-001",
    buildingCode: "B-001",
    name: "Main Building",
    address1: "123 Main Street",
    address2: "Suite 100",
    address3: "",
    address4: "",
    city: "Athens",
    countyMunicipality: "",
    prefecture: "Attica",
    region: "Southern Greece",
    postcode: "12345",
    country: "Greece",
    descriptionNotes: "Main headquarters building.",
  };

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [details, setDetails] = useState(initialDetails);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(details);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setDetails(values);
      setIsEditing(false);
    });
  };

  const handleNavigation = (code, path) => {
    navigate(`/${path}/${code}`);
  };

  const generalData = [
    { key: "1", field1: "Custom Value 1", field2: "Custom Value 2", field3: "Custom Value 3", field4: "Custom Value 4", field5: "Custom Value 5", field6: "Custom Value 6", lot: "Lot A" },
  ];

  const unitsData = [
    { key: "1", propertyCode: "P-001", floorCode: "F-1", unitTypeCode: "UT-001", unitCode: "U-101" },
  ];

  const contactsData = [
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
      inactiveDate: "",
    },
  ];

  const tabColumns = {
    general: [
      { title: "User-Defined Field 1", dataIndex: "field1", key: "field1" },
      { title: "User-Defined Field 2", dataIndex: "field2", key: "field2" },
      { title: "User-Defined Field 3", dataIndex: "field3", key: "field3" },
      { title: "User-Defined Field 4", dataIndex: "field4", key: "field4" },
      { title: "User-Defined Field 5", dataIndex: "field5", key: "field5" },
      { title: "User-Defined Field 6", dataIndex: "field6", key: "field6" },
      { title: "Lot", dataIndex: "lot", key: "lot" },
    ],
    units: [
      {
        title: "Property Code",
        dataIndex: "propertyCode",
        key: "propertyCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "property")}>{text}</a>
        ),
      },
      { title: "Floor Code", dataIndex: "floorCode", key: "floorCode" },
      { title: "Unit Type Code", dataIndex: "unitTypeCode", key: "unitTypeCode" },
      { title: "Unit Code", dataIndex: "unitCode", key: "unitCode" },
    ],
    contacts: [
      {
        title: "Contact Code",
        dataIndex: "contactCode",
        key: "contactCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "contact")}>{text}</a>
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Building Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        <Divider>Basic Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
          {Object.entries(details).map(([key, value]) => (
            <Descriptions.Item label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())} key={key}>
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

      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
        <TabPane tab="General" key="1">
          <Table dataSource={generalData} columns={tabColumns.general} pagination={false} />
        </TabPane>
        <TabPane tab="Unit(s)" key="2">
          <Table dataSource={unitsData} columns={tabColumns.units} pagination={false} />
        </TabPane>
        <TabPane tab="Contacts" key="3">
          <Table dataSource={contactsData} columns={tabColumns.contacts} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BuildingDetails;
