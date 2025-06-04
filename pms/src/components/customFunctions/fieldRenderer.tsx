import React from "react";
import { Input, InputNumber, Switch, Select, Radio, DatePicker } from "antd";

interface Option {
  label: React.ReactNode;
  value: string | number;
}

export interface FieldConfig {
  type?: string;
  component?: React.ComponentType<any>;
  componentProps?: any;
  options?: Option[];
  prefix?: string;
  postfix?: string;
  format?: string;
}

export type FieldConfigType = { [key: string]: FieldConfig } | FieldConfig;

// This function is a utility that returns a React element based on the field type.
export function renderFieldByType(
  fieldName: string,
  fieldConfig: FieldConfigType
): React.ReactNode {
  // If fieldConfig is an object with keys, treat it as a map;
  // otherwise, assume it's a config object for a single field.
  const config: FieldConfig =
    (typeof fieldConfig === "object" && "type" in fieldConfig
      ? (fieldConfig as FieldConfig)
      : (fieldConfig as { [key: string]: FieldConfig })[fieldName]) || { type: "text" };

  switch (config.type) {
    case "text": {
      const TextInput = config.component || Input;
      return (
        <TextInput style={{ margin: "4px 0" }} {...(config.componentProps || {})} />
      );
    }
    case "select": {
      return (
        <Select style={{ width: "100%" }} {...(config.componentProps || {})}>
          {config.options?.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      );
    }
    case "multiSelect": {
      return (
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          {...(config.componentProps || {})}
        >
          {config.options?.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      );
    }
    case "radio": {
      return (
        <Radio.Group {...(config.componentProps || {})}>
          {config.options?.map((opt) => (
            <Radio key={opt.value} value={opt.value}>
              {opt.label}
            </Radio>
          ))}
        </Radio.Group>
      );
    }
    case "date": {
      const DateComp = config.component || DatePicker;
      return (
        <DateComp
          style={{ width: "100%" }}
          format={config.format || "YYYY-MM-DD"}
          {...(config.componentProps || {})}
        />
      );
    }
    case "number": {
      const NumberInput = config.component || InputNumber;
      return (
        <NumberInput
          style={{ width: "100%" }}
          formatter={(value) =>
            `${config.prefix ? config.prefix + " " : ""}${value}${
              config.postfix ? " " + config.postfix : ""
            }`
          }
          parser={(value: string | undefined) =>
            value
              ? value
                  .replace(new RegExp(`^${config.prefix ? config.prefix + "\\s*" : ""}`), "")
                  .replace(new RegExp(`${config.postfix ? "\\s*" + config.postfix : ""}$`), "")
              : ""
          }
          {...(config.componentProps || {})}
        />
      );
    }
    case "switch": {
      return <Switch {...(config.componentProps || {})} />;
    }
    default: {
      const DefaultInput = config.component || Input;
      return (
        <DefaultInput style={{ margin: "4px 0" }} {...(config.componentProps || {})} />
      );
    }
  }
}