// src/components/ExpandedRowForm.jsx
import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";

const ExpandedRowForm = ({ record, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // Populate form fields with current record data
    form.setFieldsValue(record);
  }, [record, form]);

  const handleFinish = (values) => {
    // Merge updated values with the original record and call onSave
    onSave({ ...record, ...values });
  };

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={handleFinish}
      style={{ padding: "16px", background: "#fafafa", borderRadius: "4px" }}
    >
      <Form.Item
        name="amount"
        label="Amount"
        rules={[{ required: true, message: "Amount is required" }]}
      >
        <InputNumber prefix="€" />
      </Form.Item>

      <Form.Item name="notes" label="Notes" style={{ width: 300 }}>
        <Input.TextArea rows={1} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ExpandedRowForm;
