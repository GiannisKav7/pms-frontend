import React from "react";
import { Input, InputNumber, Switch, Select, Radio, DatePicker} from "antd";
const { Option } = Select; // Add this line

/**
 * Dynamically returns the correct form field component
 * based on a `fieldConfig` entry.
 *
 * @param {string} fieldName - The name/key of the field (e.g., "rentMonthly").
 * @param {Object} fieldConfig - Configuration mapping for all fields.
 * @param {Object} form - (Optional) antd Form instance if needed for advanced usage.
 * @returns React Element (Input, Select, Radio, etc.)
 */


export function renderFieldByType(fieldName, fieldConfig, form) {
  // fallback type
  const config = fieldConfig[fieldName] || { type: "text" };

  switch (config.type) {
    case "text":
      return <Input style={{ margin: "4px 0" }} />;

    case "select":
      return (
        <Select style={{ width: "100%" }}>
          {config.options?.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      );
    case "multiSelect":
      return (
        <Select mode="multiple" style={{ width: "100%" }}>
          {config.options?.map((opt) => (
            <Option key={opt} value={opt}>
              {opt}
            </Option>
          ))}
        </Select>
      );
  
    case "radio":
      return (
        <Radio.Group>
          {config.options?.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
        </Radio.Group>
      );

    case "date":
      return <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />;

    case "number":
      return (
        <InputNumber
          style={{ width: "100%" }}
          {...config} // spreads in things like min, max, prefix, step...
        />
      );

    case "switch":
      // If you need to handle checked state manually, you can:
      // return <Switch onChange={(checked) => form?.setFieldValue(fieldName, checked)} />;
      // Otherwise, for a simple switch, do:
      return <Switch checkedChildren="Yes" unCheckedChildren="No" />;

    default:
      return <Input style={{ margin: "4px 0" }} />;
  }
}
