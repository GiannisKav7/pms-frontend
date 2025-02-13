import React, { useState } from "react";
import { Descriptions, Table, Button, Form, Divider, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { renderFieldByType } from "../customFunctions/fieldRenderer";
import BuildingDetailsSidebar from "./BuildingDetailsSidebar";
import BuildingDetailsBasicInfo from "./BuildingDetailsBasicInfo";

const { Sider, Content } = Layout;

const buildingFieldConfig = {
  propertyCode: { type: "text" },
  buildingCode: { type: "text" },
  name: { type: "text" },
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
  descriptionNotes: { type: "text" },
};

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
  const [selectedMenuItem, setSelectedMenuItem] = useState("basicInfo");
  const [collapsed, setCollapsed] = useState(false);

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

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "basicInfo":
        return (
          <BuildingDetailsBasicInfo
            form={form}
            details={details}
            isEditing={isEditing}
            handleNavigation={handleNavigation}
            buildingFieldConfig={buildingFieldConfig}
          />
        );
      case "general":
        return <Table dataSource={generalData} columns={tabColumns.general} pagination={false} />;
      case "units":
        return <Table dataSource={unitsData} columns={tabColumns.units} pagination={false} />;
      case "contacts":
        return <Table dataSource={contactsData} columns={tabColumns.contacts} pagination={false} />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={200}
        className="site-layout-background"
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <BuildingDetailsSidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />
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
            <h2 style={{ margin: 0 }}>Building Details</h2>
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

export default BuildingDetails;
