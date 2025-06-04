import React, { useState } from "react";
import { Card, Row, Col, Descriptions, Button, Form, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { renderFieldByType } from "../components/customFunctions/fieldRenderer";

interface FieldConfig {
  type: string;
  options?: (string | { label: string; value: string | number })[];
  min?: number;
  step?: number;
  prefix?: string;
}

export const unitTypeFieldConfig: Record<string, FieldConfig> = {
  unitTypeCode: { type: "text" },
  propertyCode: { type: "text" },
  description: { type: "text" },
  bedrooms: { type: "number", min: 0, step: 1 },
  bathrooms: { type: "number", min: 0, step: 1 },
  rent: { type: "number", min: 0, step: 10, prefix: "€" },
  deposit: { type: "number", min: 0, step: 10, prefix: "€" },
  minimumRent: { type: "number", min: 0, step: 10, prefix: "€" },
  maximumRent: { type: "number", min: 0, step: 10, prefix: "€" },
  totalUnits: { type: "number", min: 0, step: 1 },
  totalRooms: { type: "number", min: 0, step: 1 },
  totalBeds: { type: "number", min: 0, step: 1 },
  category: {
    type: "select",
    options: [
      { label: "Residential", value: "Residential" },
      { label: "Commercial", value: "Commercial" },
      { label: "Mixed-Use", value: "Mixed-Use" },
    ],
  },
  type: {
    type: "select",
    options: [
      { label: "Apartment", value: "Apartment" },
      { label: "House", value: "House" },
      { label: "Condo", value: "Condo" },
    ],
  },
  features: { type: "multiSelect", options: ["Pool", "Gym", "Parking", "Garden"] },
  options: {
    type: "select",
    options: [
      { label: "Furnished", value: "Furnished" },
      { label: "Pet-friendly", value: "Pet-friendly" },
      { label: "None", value: "None" },
    ],
  },
};

interface UnitTypeDetailsType {
  unitTypeCode: string;
  propertyCode: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  rent: string;
  deposit: string;
  minimumRent: string;
  maximumRent: string;
  totalUnits: string;
  totalRooms: string;
  totalBeds: string;
  category: string;
  type: string;
  features: string;
  options: string;
}

const initialDetails: UnitTypeDetailsType = {
  unitTypeCode: "UT-001",
  propertyCode: "P-001",
  description: "Luxury Apartment",
  bedrooms: "3",
  bathrooms: "2",
  rent: "€1500",
  deposit: "€3000",
  minimumRent: "€1200",
  maximumRent: "€2000",
  totalUnits: "50",
  totalRooms: "150",
  totalBeds: "200",
  category: "Residential",
  type: "Apartment",
  features: "Pool, Gym, Parking",
  options: "Furnished, Pet-friendly",
};

const UnitTypeDetails: React.FC = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [form] = Form.useForm<UnitTypeDetailsType>();
  const [details, setDetails] = useState<UnitTypeDetailsType>(initialDetails);

  const handleEditToggle = (): void => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      form.setFieldsValue(details);
    }
  };

  const handleSave = (): void => {
    form.validateFields().then((values: UnitTypeDetailsType) => {
      setDetails(values);
      setIsEditing(false);
    });
  };

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <h2 style={{ marginBottom: 16 }}>Unit Type Details</h2>
      <Button type="primary" onClick={isEditing ? handleSave : handleEditToggle}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card title="Basic Information" bordered>
            <Form form={form} layout="vertical">
              <Descriptions bordered column={1}>
                {Object.entries(details).map(([key, value]) => (
                  <Descriptions.Item
                    label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    key={key}
                  >
                    {isEditing ? (
                      <Form.Item name={key} noStyle rules={[{ required: true, message: `${key} is required` }]}>
                        {renderFieldByType(key, unitTypeFieldConfig)}
                      </Form.Item>
                    ) : (
                      <span style={{ color: "#595999" }}>{value}</span>
                    )}
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Rent Information" bordered>
            <p>
              <b>Rent:</b> {details.rent}
            </p>
            <p>
              <b>Minimum Rent:</b> {details.minimumRent}
            </p>
            <p>
              <b>Maximum Rent:</b> {details.maximumRent}
            </p>
            <p>
              <b>Deposit:</b> {details.deposit}
            </p>
          </Card>
          <Card title="Features & Options" bordered style={{ marginTop: 16 }}>
            <p>
              <b>Features:</b> {details.features}
            </p>
            <p>
              <b>Options:</b> {details.options}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UnitTypeDetails;
