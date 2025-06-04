import React from "react";
import { Form, Descriptions, Divider, FormInstance } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

interface LegalEntityOwnerDetailsBasicInfoProps {
  form: FormInstance<any>;
  details: { [key: string]: any };
  isEditing: boolean;
  handleNavigation: (value: any, field: string) => void;
  fieldConfig: any;
}

const LegalEntityOwnerDetailsBasicInfo: React.FC<LegalEntityOwnerDetailsBasicInfoProps> = ({
  form,
  details,
  isEditing,
  handleNavigation,
  fieldConfig,
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
              {renderFieldByType(key, fieldConfig)}
            </Form.Item>
          ) : (
            <span style={{ color: "#595959" }}>{value}</span>
          )}
        </Descriptions.Item>
      ))}
    </Descriptions>
  </Form>
);

export default LegalEntityOwnerDetailsBasicInfo;