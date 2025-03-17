import React from "react";
import { Input, InputNumber, Switch, Select, Radio, DatePicker } from "antd";

export function renderFieldByType(fieldName, fieldConfig, form) {
  // fallback config if nothing exists for fieldName
  const config = fieldConfig[fieldName] || fieldConfig || { type: "text" };

  switch (config.type) {
    case "text":
      // If a component is provided in config use it, else Input
      const TextInput = config.component || Input;
      return <TextInput style={{ margin: "4px 0" }} {...(config.componentProps || {})} />;
      
    case "select":
      return (
        <Select style={{ width: "100%" }} {...(config.componentProps || {})}>
          {config.options?.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      );
    case "multiSelect":
      return (
        <Select mode="multiple" style={{ width: "100%" }} {...(config.componentProps || {})}>
          {config.options?.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      );
    case "radio":
      return (
        <Radio.Group {...(config.componentProps || {})}>
          {config.options?.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
        </Radio.Group>
      );
    case "date":
      // Use the provided component if available (like DatePicker)
      const DateComp = config.component || DatePicker;
      return <DateComp style={{ width: "100%" }} {...(config.componentProps || {})} />;
    case "number":
      const NumberInput = config.component || InputNumber;
      return (
        <NumberInput
          style={{ width: "100%" }}
          {...(config.componentProps || {})}
        />
      );
    case "switch":
      return <Switch {...(config.componentProps || {})} />;
    default:
      const DefaultInput = config.component || Input;
      return <DefaultInput style={{ margin: "4px 0" }} {...(config.componentProps || {})} />;
  }
}
