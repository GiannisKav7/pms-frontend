import React from "react";
import { Form, Descriptions, Divider } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

const UnitTypeDetailsBasicInfo = ({ form, details, isEditing, handleNavigation, unitTypeFieldConfig }) => (
  <Form form={form} layout="vertical">
    <Divider>Basic Information</Divider>
    <Descriptions bordered column={1} style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
      {Object.entries(details).map(([key, value]) => (
        <Descriptions.Item
          label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          key={key}
        >
          {isEditing ? (
            <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
              {renderFieldByType(key, unitTypeFieldConfig)}
            </Form.Item>
          ) : (
            <span style={{ color: "#595999" }}>{value}</span>
          )}
        </Descriptions.Item>
      ))}
    </Descriptions>
  </Form>
);

export default UnitTypeDetailsBasicInfo;