import React, { useState } from "react";
import { Descriptions, Tabs, Table, Button, Input, Form, Divider } from "antd";

const { TabPane } = Tabs;

const ContactDetails = () => {

    const initialDetails = {
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

    const contactTypeAssociationData = [
        { key: "1", role: "Manager" },
        { key: "2", role: "Assistant" },
    ];

    const contactTypeColumns = [
        { title: "Role", dataIndex: "role", key: "role" },
    ];

    return (
        <div style={{ padding: 24, background: "#f9f9f9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ margin: 0 }}>Contacts Details</h2>
                <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
                    {isEditing ? "Save" : "Edit"}
                </Button>
            </div>
            <Form form={form} layout="vertical">
                <Divider>Contact Information</Divider>
                <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
                    {Object.entries(details).slice(0, 8).map(([key, value]) => (
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

                <Divider>Address</Divider>
                <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
                    {Object.entries(details).slice(8, 15).map(([key, value]) => (
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

                <Divider>Contact Details</Divider>
                <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
                    {Object.entries(details).slice(15).map(([key, value]) => (
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

            <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
                <TabPane tab="Contact Type Association" key="1">
                    <Table dataSource={contactTypeAssociationData} columns={contactTypeColumns} pagination={false} />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default ContactDetails;
