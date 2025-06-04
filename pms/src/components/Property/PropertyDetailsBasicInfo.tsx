import React from "react";
import { Form, Descriptions, Divider } from "antd";
import type { FormInstance } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

interface PropertyDetailsBasicInfoProps {
  form: FormInstance<any>;
  details: Record<string, any>;
  isEditing: boolean;
  handleNavigation: (value: any, field: string) => void;
  propertyFieldConfig: any;
}

const PropertyDetailsBasicInfo: React.FC<PropertyDetailsBasicInfoProps> = ({
  form,
  details,
  isEditing,
  handleNavigation,
  propertyFieldConfig,
}) => (
  <Form form={form} layout="vertical">
    <Divider>Basic Information</Divider>
    <Descriptions
      bordered
      column={2}
      style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}
    >
      {Object.entries(details).map(([key, value]) => (
        <Descriptions.Item
          label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
          key={key}
        >
          {key.toLowerCase().includes("code") && !isEditing ? (
            <a
              style={{ color: "#1890ff" }}
              onClick={() =>
                handleNavigation(value, key.replace("Code", "").toLowerCase())
              }
            >
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
            <span style={{ color: "#595959" }}>{value}</span>
          )}
        </Descriptions.Item>
      ))}
    </Descriptions>
  </Form>
);

export default PropertyDetailsBasicInfo;