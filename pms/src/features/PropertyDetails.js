import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { renderFieldByType } from "../components/customFunctions/fieldRenderer";
const { TabPane } = Tabs;

// propertyFieldConfig.js (or inline in the same file)

export const propertyFieldConfig = {
    propertyCode: { type: "text" },
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
        // ...
      ],
    },
    countyMunicipality: {
      type: "select",
      options: [
        { label: "County1", value: "County1" },
        { label: "County2", value: "County2" },
        // ...
      ],
    },
    prefecture: {
      type: "select",
      options: [
        { label: "Attica", value: "Attica" },
        { label: "Central Macedonia", value: "Central Macedonia" },
        // ...
      ],
    },
    region: {
      type: "select",
      options: [
        { label: "Southern Greece", value: "Southern Greece" },
        { label: "Northern Greece", value: "Northern Greece" },
        // ...
      ],
    },
    postcode: { type: "text" },
    country: {
      type: "select",
      options: [
        { label: "Greece", value: "Greece" },
        { label: "Other", value: "Other" },
        // ...
      ],
    },
    descriptionNotes: { type: "text" },
  };

  
const PropertyDetails = () => {

    const initialDetails = {
        propertyCode: "P-001",
        name: "Alpha Headquarters",
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
        descriptionNotes: "Main office building for Alpha Corp.",
    };

    const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();
    const [details, setDetails] = useState(initialDetails);
    const navigate = useNavigate();

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

    const attributesData = [
        { key: "1", attributeSet: "Size", attribute: "Total Area", value: "500 sqm" },
        { key: "2", attributeSet: "Utilities", attribute: "Electricity", value: "Connected" },
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
            inactiveDate: "2024-01-01",
        },
        {
            key: "2",
            contactCode: "C-002",
            role: "Assistant",
            primary: "No",
            companyName: "Beta Corp",
            firstName: "Jane",
            lastName: "Smith",
            phoneNumber1: "+30 210 9876543",
            phoneNumber2: "+30 210 6549873",
            email: "jane.smith@betacorp.com",
            inactiveDate: "N/A",
        },
    ];

    const taxInfoData = [
        {
            key: "1",
            legalEntityOwnerCode: "LE-001",
            taxAuthority: "Athens Tax Authority",
            baseCurrency: "EUR",
            taxOpted: "Yes",
            taxStatusChanged: "2024-01-01",
            status: "Active",
            defaultSalesTransactionType: "Retail",
            defaultPurchasesTransactionType: "Wholesale",
            taxPoint: "Invoice Date",
            reportEntityCode: "REP-001",
        },
    ];

    const tabColumns = {
        attributes: [
            { title: "Attribute Sets", dataIndex: "attributeSet", key: "attributeSet" },
            { title: "Attribute", dataIndex: "attribute", key: "attribute" },
            { title: "Value", dataIndex: "value", key: "value" },
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
        taxInfo: [
            {
                title: "Legal Entity/Owner Code",
                dataIndex: "legalEntityOwnerCode",
                key: "legalEntityOwnerCode",
                render: (text) => (
                    <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "legalEntity")}>{text}</a>
                ),
            },
            { title: "Tax Authority", dataIndex: "taxAuthority", key: "taxAuthority" },
            { title: "Base Currency", dataIndex: "baseCurrency", key: "baseCurrency" },
            { title: "Tax Opted (Yes/No)", dataIndex: "taxOpted", key: "taxOpted" },
            { title: "Tax Status Changed", dataIndex: "taxStatusChanged", key: "taxStatusChanged" },
            { title: "Status", dataIndex: "status", key: "status" },
            { title: "Default Sales Transaction Type", dataIndex: "defaultSalesTransactionType", key: "defaultSalesTransactionType" },
            { title: "Default Purchases Transaction Type", dataIndex: "defaultPurchasesTransactionType", key: "defaultPurchasesTransactionType" },
            { title: "Tax Point", dataIndex: "taxPoint", key: "taxPoint" },
            {
                title: "Report Entity Code",
                dataIndex: "reportEntityCode",
                key: "reportEntityCode",
                render: (text) => (
                    <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "reportEntity")}>{text}</a>
                ),
            },
        ],
    };

    return (
        <div style={{ padding: 24, background: "#f9f9f9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ margin: 0 }}>Property Details</h2>
                <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
                    {isEditing ? "Save" : "Edit"}
                </Button>
            </div>
            <Form form={form} layout="vertical">
                <Divider>Basic Information</Divider>
                <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
                {Object.entries(details).map(([key, value]) => (
                    <Descriptions.Item
                    label={key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    key={key}
                    >
                    {key.toLowerCase().includes("code") && !isEditing ? (
                        // If it's a code field in read-only mode, treat it as a link
                        <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}>
                        {value}
                        </a>
                    ) : isEditing ? (
                        <Form.Item
                        name={key}
                        noStyle
                        rules={[{ required: true, message: `${key} is required` }]}
                        >
                        {renderFieldByType(key, propertyFieldConfig)}
                        </Form.Item>
                    ) : (
                        // read-only
                        <span style={{ color: "#595999" }}>{value}</span>
                    )}
                    </Descriptions.Item>
                ))}
                </Descriptions>
            </Form>

            <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
                <TabPane tab="Attributes" key="1">
                    <Table dataSource={attributesData} columns={tabColumns.attributes} pagination={false} />
                </TabPane>
                <TabPane tab="Contacts" key="2">
                    <Table dataSource={contactsData} columns={tabColumns.contacts} pagination={false} />
                </TabPane>
                <TabPane tab="Tax Info" key="3">
                    <Table dataSource={taxInfoData} columns={tabColumns.taxInfo} pagination={false} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default PropertyDetails;
