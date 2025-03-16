// src/components/ExpandedRowForm.jsx
import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

const ExpandedRowForm = ({ record, onSave, fields = [] }) => {
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
            {fields.map((field) => (
                <Form.Item
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    rules={field.rules}
                    {...(field.formItemProps || {})}
                >
                    {renderFieldByType(field.name, field, form)}
                </Form.Item>
            ))}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ExpandedRowForm;
