import React from "react";
import { Form, Input } from "antd";

const ChargeCodeInput = ({
  label = "Charge Code",
  value,
  onChange,
  placeholder = "Enter charge code",
  required = false,
  style = {},
}) => {
  return (
    <Form layout="vertical">
      <Form.Item label={label} required={required}>
        <Input 
          value={value} 
          onChange={(e) => onChange(e.target.value)} 
          placeholder={placeholder} 
          style={{ width: "100%", ...style }} 
        />
      </Form.Item>
    </Form>
  );
};

export default ChargeCodeInput;
