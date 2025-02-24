import React from "react";
import { Form, InputNumber } from "antd";

const NumberInput = ({
  label = "Label",
  value,
  onChange,
  min = 1,
  max = 31,
  style = {},
  required = false,
}) => {
  return (
    <Form layout="vertical">
      <Form.Item label={label} required={required}>
        <InputNumber
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          style={{ width: "100%", ...style }}
        />
      </Form.Item>
    </Form>
  );
};

export default NumberInput;