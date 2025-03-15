// src/components/ExpandedRowForm.jsx
import React, { useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";

const componentMap = {
    Input,
    InputNumber,
    "Input.TextArea": Input.TextArea,
};

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
            {fields.map((field) => {
                const Component = componentMap[field.component];
                if (!Component) return null;
                return (
                    <Form.Item
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        rules={field.rules}
                        {...(field.formItemProps || {})}
                    >
                        <Component {...(field.componentProps || {})} />
                    </Form.Item>
                );
            })}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ExpandedRowForm;
