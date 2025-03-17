import React, { useEffect } from "react";
import { Form, Button, DatePicker, Input, Row, Col } from "antd";
import dayjs from "dayjs";
import { renderFieldByType } from "../customFunctions/fieldRenderer";

// Define default fields for the UnitForm
const defaultFields = [
  {
    name: "unitName",
    label: "Unit Name",
    type: "text",
    component: Input,
    componentProps: { placeholder: "Enter unit name" },
  },
  {
    name: "unitCode",
    label: "Unit Code",
    type: "text",
    component: Input,
    componentProps: { placeholder: "Enter unit code" },
  },
  {
    name: "buildingCode",
    label: "Building Code",
    type: "text",
    component: Input,
    componentProps: { placeholder: "Enter building code" },
  },
  {
    name: "floorCode",
    label: "Floor Code",
    type: "text",
    component: Input,
    componentProps: { placeholder: "Enter floor code" },
  },
  {
    name: "location",
    label: "Location",
    type: "text",
    component: Input,
    componentProps: { placeholder: "Enter location" },
  },
  {
    name: "fromDate",
    label: "From Date",
    type: "date",
    component: DatePicker,
    componentProps: { format: "YYYY-MM-DD", placeholder: "Select from date" },
  },
  {
    name: "toDate",
    label: "To Date",
    type: "date",
    component: DatePicker,
    componentProps: { format: "YYYY-MM-DD", placeholder: "Select to date" },
  },
  {
    name: "movingInDate",
    label: "Moving In Date",
    type: "date",
    component: DatePicker,
    componentProps: { format: "YYYY-MM-DD", placeholder: "Select moving in date" },
  },
  {
    name: "movingOutDate",
    label: "Moving Out Date",
    type: "date",
    component: DatePicker,
    componentProps: { format: "YYYY-MM-DD", placeholder: "Select moving out date" },
  },
];

const UnitForm = ({ record, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    // Convert string date fields to dayjs objects for DatePicker components
    const formattedRecord = { ...record };
    defaultFields.forEach((field) => {
      if (field.type === "date" && formattedRecord[field.name]) {
        formattedRecord[field.name] = dayjs(formattedRecord[field.name], "YYYY-MM-DD");
      }
    });
    form.setFieldsValue(formattedRecord);
  }, [record, form]);

  const handleFinish = (values) => {
    // Convert dayjs objects back to string format
    const formattedValues = { ...values };
    defaultFields.forEach((field) => {
      if (field.type === "date" && formattedValues[field.name]) {
        formattedValues[field.name] = formattedValues[field.name].format("YYYY-MM-DD");
      }
    });
    onSave({ ...record, ...formattedValues });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{
        padding: "24px",
        background: "#fafafa",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row gutter={[16, 16]}>
        {defaultFields.map((field) => (
          <Col xs={24} sm={12} md={8} key={field.name}>
            <Form.Item
              name={field.name}
              label={field.label}
              rules={field.rules}
              {...(field.formItemProps || {})}
            >
              {renderFieldByType(field.name, field, form)}
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UnitForm;