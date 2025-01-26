import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const LegalEntityOwnerDetails = () => {

    const initialDetails = {
        legalEntityCode: "LE-001",
        name1: "Alpha Corporation",
        name2: "",
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
        descriptionNotes: "Holding company for multiple properties.",
        emailAddress: "alpha.corp@example.com",
        alternateEmailAddress: "contact@alphacorp.com",
        officePhoneNumber: "+30 210 1234567",
        cellphoneNumber: "+30 690 9876543",
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

    const tabData = {
        properties: [
            { key: "1", propertyCode: "P-001", propertyName: "Main Office", address: "123 Main Street", percentOwned: "100%" },
            { key: "2", propertyCode: "P-002", propertyName: "Warehouse", address: "Industrial Zone", percentOwned: "75%" },
        ],
        taxInformation: [
            {
                key: "1",
                taxRegistered: "Yes",
                vatRegistered: "Yes",
                taxAuthority: "Athens Tax Authority",
                defaultSalesTransactionType: "Retail",
                defaultPurchasesTransactionType: "Wholesale",
                taxPoint: "Invoice Date",
                baseCurrency: "EUR",
                rateProvider: "Central Bank",
                foreignRegistrationNumber: "FRN-001",
                registrationNumber: "REG-12345",
                vatRegistrationNumber: "VAT-67890",
                vatReportingCycle: "Quarterly",
                vatLastReportedThrough: "2024-01-01",
                initialReportingPeriod: "2023-Q1",
                fiscalEntityCode: "FEC-001",
            },
        ],
        otherInformation: [
            {
                key: "1",
                contractor: "Yes",
                contractorReferenceNumber: "CRN-001",
                nrl: "No",
                nrlRegistered: "No",
                nrlNumber: "",
                commercialRegistrationNumber: "COM-12345",
                cityOfRegistration: "Athens",
                shareCapitalAmount: "1,000,000 EUR",
                deferredIncomeExpenseProration: "Quarterly",
            },
        ],
        paymentInfo: [
            {
                key: "1",
                checkMemo: "Payment for services rendered",
                drawAccount: "Alpha Bank - Main",
                holdPayments: "No",
                consolidateCheques: "Yes",
                paymentMethod: "Wire Transfer",
            },
        ],
    };

    const tabColumns = {
        properties: [
            {
                title: "Property Code",
                dataIndex: "propertyCode",
                key: "propertyCode",
                render: (text) => (
                    <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "property")}>{text}</a>
                ),
            },
            { title: "Property Name", dataIndex: "propertyName", key: "propertyName" },
            { title: "Address", dataIndex: "address", key: "address" },
            { title: "Percent Owned", dataIndex: "percentOwned", key: "percentOwned" },
        ],
        taxInformation: [
            { title: "Tax Registered (Yes/No)", dataIndex: "taxRegistered", key: "taxRegistered" },
            { title: "VAT Registered (Yes/No)", dataIndex: "vatRegistered", key: "vatRegistered" },
            { title: "Tax Authority", dataIndex: "taxAuthority", key: "taxAuthority" },
            { title: "Default Sales Transaction Type", dataIndex: "defaultSalesTransactionType", key: "defaultSalesTransactionType" },
            { title: "Default Purchases Transaction Type", dataIndex: "defaultPurchasesTransactionType", key: "defaultPurchasesTransactionType" },
            { title: "Tax Point", dataIndex: "taxPoint", key: "taxPoint" },
            { title: "Base Currency", dataIndex: "baseCurrency", key: "baseCurrency" },
            { title: "Rate Provider", dataIndex: "rateProvider", key: "rateProvider" },
            { title: "Foreign Registration Number", dataIndex: "foreignRegistrationNumber", key: "foreignRegistrationNumber" },
            { title: "Registration Number", dataIndex: "registrationNumber", key: "registrationNumber" },
            { title: "VAT Registration Number", dataIndex: "vatRegistrationNumber", key: "vatRegistrationNumber" },
            { title: "VAT Reporting Cycle", dataIndex: "vatReportingCycle", key: "vatReportingCycle" },
            { title: "VAT Last Reported through", dataIndex: "vatLastReportedThrough", key: "vatLastReportedThrough" },
            { title: "Initial Reporting Period", dataIndex: "initialReportingPeriod", key: "initialReportingPeriod" },
            {
                title: "Fiscal Entity Code",
                dataIndex: "fiscalEntityCode",
                key: "fiscalEntityCode",
                render: (text) => (
                    <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "fiscalEntity")}>{text}</a>
                ),
            },
        ],
        otherInformation: [
            { title: "Contractor (Yes/No)", dataIndex: "contractor", key: "contractor" },
            { title: "Contractor Reference Number", dataIndex: "contractorReferenceNumber", key: "contractorReferenceNumber" },
            { title: "NRL (Non Resident Landlord)", dataIndex: "nrl", key: "nrl" },
            { title: "NRL Registered (Yes/No)", dataIndex: "nrlRegistered", key: "nrlRegistered" },
            { title: "NRL Number", dataIndex: "nrlNumber", key: "nrlNumber" },
            { title: "Commercial Registration Number", dataIndex: "commercialRegistrationNumber", key: "commercialRegistrationNumber" },
            { title: "City of Registration", dataIndex: "cityOfRegistration", key: "cityOfRegistration" },
            { title: "Share Capital Amount", dataIndex: "shareCapitalAmount", key: "shareCapitalAmount" },
            { title: "Deferred Income/Expense Proration", dataIndex: "deferredIncomeExpenseProration", key: "deferredIncomeExpenseProration" },
        ],
        paymentInfo: [
            { title: "Check Memo", dataIndex: "checkMemo", key: "checkMemo" },
            { title: "Draw Account", dataIndex: "drawAccount", key: "drawAccount" },
            { title: "Hold Payments (Yes/No)", dataIndex: "holdPayments", key: "holdPayments" },
            { title: "Consolidate Cheques (Yes/No)", dataIndex: "consolidateCheques", key: "consolidateCheques" },
            { title: "Payment Method", dataIndex: "paymentMethod", key: "paymentMethod" },
        ],
    };

    return (
        <div style={{ padding: 24, background: "#f9f9f9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ margin: 0 }}>Legal Entity Owner Details</h2>
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
                <TabPane tab="Properties" key="1">
                    <Table dataSource={tabData.properties} columns={tabColumns.properties} pagination={false} />
                </TabPane>
                <TabPane tab="Tax Information" key="2">
                    <Table dataSource={tabData.taxInformation} columns={tabColumns.taxInformation} pagination={false} />
                </TabPane>
                <TabPane tab="Other Information" key="3">
                    <Table dataSource={tabData.otherInformation} columns={tabColumns.otherInformation} pagination={false} />
                </TabPane>
                <TabPane tab="Payment Information" key="4">
                    <Table dataSource={tabData.paymentInfo} columns={tabColumns.paymentInfo} pagination={false} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default LegalEntityOwnerDetails;
