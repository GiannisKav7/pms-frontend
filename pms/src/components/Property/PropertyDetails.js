import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

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
        { key: "1", contactCode: "C-001", name: "John Doe", role: "Manager" },
        { key: "2", contactCode: "C-002", name: "Jane Smith", role: "Assistant" },
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
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Role", dataIndex: "role", key: "role" },
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
