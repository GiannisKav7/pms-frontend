import React, { useState } from "react";
import {
  Descriptions, Tabs, Table, Button, Form, Divider
} from "antd";
import { useNavigate } from "react-router-dom";

import { renderFieldByType } from "../components/customFunctions/fieldRenderer";

const { TabPane } = Tabs;

const floorFieldConfig = {
  propertyCode: { type: "text" },
  buildingCode: { type: "text" },
  floorCode: { type: "text" },
  floorName: { type: "text" },
  floorNumber: {
    type: 'number',
    min: 0,
    step: 1,
  },
  elevator: { type: "switch" },
  descriptionNotes: { type: "text" },
};

const FloorDetails = () => {
  const initialDetails = {
    propertyCode: "P-001",
    buildingCode: "B-001",
    floorCode: "F-001",
    floorName: "First Floor",
    floorNumber: "1",
    elevator: "Yes",
    descriptionNotes: "First floor with multiple offices.",
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
    { key: "1", field1: "Custom Value 1", field2: "Custom Value 2", field3: "Custom Value 3", field4: "Custom Value 4", field5: "Custom Value 5", field6: "Custom Value 6" },
  ];

  const unitsData = [
    { key: "1", propertyCode: "P-001", unitTypeCode: "UT-001", unitCode: "U-101" },
  ];

  const tabColumns = {
    general: [
      { title: "User-Defined Field 1", dataIndex: "field1", key: "field1" },
      { title: "User-Defined Field 2", dataIndex: "field2", key: "field2" },
      { title: "User-Defined Field 3", dataIndex: "field3", key: "field3" },
      { title: "User-Defined Field 4", dataIndex: "field4", key: "field4" },
      { title: "User-Defined Field 5", dataIndex: "field5", key: "field5" },
      { title: "User-Defined Field 6", dataIndex: "field6", key: "field6" },
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
      {
        title: "Unit Type Code",
        dataIndex: "unitTypeCode",
        key: "unitTypeCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "unitType")}>{text}</a>
        ),
      },
      {
        title: "Unit Code",
        dataIndex: "unitCode",
        key: "unitCode",
        render: (text) => (
          <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(text, "unit")}>{text}</a>
        ),
      },
    ],
  };

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h2 style={{ margin: 0 }}>Floor Details</h2>
        <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
      <Form form={form} layout="vertical">
        <Divider>Basic Information</Divider>
        <Descriptions bordered column={2} style={{ background: "#fff", padding: "0px", borderRadius: "8px" }}>
          {Object.entries(details).map(([key, value]) => (
            <Descriptions.Item
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              key={key}
            >
              {key.toLowerCase().includes("code") && !isEditing ? (
                <a style={{ color: "#1890ff" }} onClick={() => handleNavigation(value, key.replace("Code", "").toLowerCase())}>
                  {String(value)}
                </a>
              ) : isEditing ? (
                <Form.Item
                  name={key}
                  noStyle
                  // if you want to require them, do:
                  rules={[{ required: true, message: `${key} is required` }]}
                  // For the switch field, we'll connect the boolean to 'checked':
                  valuePropName={floorFieldConfig[key]?.type === "switch" ? "checked" : undefined}
                >
                  {renderFieldByType(key, floorFieldConfig)}
                </Form.Item>
              ) : (
                // read-only
                <span style={{ color: "#595999" }}>
                  {/* If 'elevator' is boolean, you can show 'Yes'/'No' in read-only mode */}
                  {key === "elevator"
                    ? value ? "Yes" : "No"
                    : String(value)
                  }
                </span>
              )}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Form>

      <Tabs defaultActiveKey="1" style={{ marginTop: 24 }}>
        <TabPane tab="General" key="1">
          <Table dataSource={generalData} columns={tabColumns.general} pagination={false} />
        </TabPane>
        <TabPane tab="Units" key="2">
          <Table dataSource={unitsData} columns={tabColumns.units} pagination={false} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FloorDetails;
