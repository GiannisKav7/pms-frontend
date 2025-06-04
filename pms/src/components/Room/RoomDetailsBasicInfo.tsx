import React from "react";
import { Form, Descriptions, Divider } from "antd";
import type { FormInstance } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

interface RoomDetailsBasicInfoProps {
  form: FormInstance<any>;
  details: Record<string, any>;
  isEditing: boolean;
  handleNavigation: (value: any, field: string) => void;
  roomFieldConfig: any;
}

const RoomDetailsBasicInfo: React.FC<RoomDetailsBasicInfoProps> = ({
  form,
  details,
  isEditing,
  handleNavigation,
  roomFieldConfig,
}) => (
  <Form form={form} layout="vertical">
    <Divider>Basic Information</Divider>
    <Descriptions
      bordered
      column={2}
      style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}
    >
      {Object.entries(details).map(([key, value]) => {
        const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
        return (
          <Descriptions.Item label={label} key={key}>
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
                {renderFieldByType(key, roomFieldConfig)}
              </Form.Item>
            ) : (
              <span style={{ color: "#595959" }}>{value}</span>
            )}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  </Form>
);

export default RoomDetailsBasicInfo;