import React from "react";
import { Form, Divider, Card, Row, Col } from "antd";
import { renderFieldByType } from "../customFunctions/fieldRenderer";
import { fieldConfig } from "../../config/leaseConfig";
import dayjs from "dayjs";

const OverviewContent = ({
    form,
    overviewGroups,
    leaseDetails,
    isEditing,
  }) => {
    return (
      <Form form={form} layout="vertical">
        <Divider>Lease Information</Divider>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {overviewGroups.map((group) => (
            <Card key={group.title} title={group.title}>
              <Row gutter={16}>
                {group.fields.map((fieldKey) => {
                  const label = fieldKey
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());
                  const fieldValue = leaseDetails[fieldKey];
                  const fieldCfg = fieldConfig[fieldKey] || {};

                  const isNumberField = fieldCfg.type === "number";
                  const isDateField = fieldCfg.type === "date";

                  let displayValue;

                  if (isDateField) {
                    displayValue = fieldValue
                      ? dayjs(fieldValue).format(fieldCfg.format || "DD/MM/YYYY")
                      : "";
                  } else if (isNumberField) {
                    displayValue = `${
                      fieldCfg.prefix ? fieldCfg.prefix + " " : ""
                    }${Number(fieldValue).toLocaleString()}`;
                  } else {
                    displayValue = `${fieldValue}`;
                  }

                  return (
                    <Col span={24} key={fieldKey}>
                      {isEditing ? (
                        <Form.Item
                          label={label}
                          name={fieldKey}
                          rules={[
                            { required: true, message: `${label} is required` },
                          ]}
                          valuePropName={
                            fieldCfg.type === "switch" ? "checked" : undefined
                          }
                        >
                          {renderFieldByType(fieldKey, fieldConfig, form)}
                        </Form.Item>
                      ) : (
                        <div style={{ marginBottom: 16 }}>
                          <div
                            style={{ fontWeight: "lighter", marginBottom: 4 }}
                          >
                            {label}
                          </div>
                          <div style={{ color: "#595959", fontWeight: "bold" }}>
                            {displayValue}
                          </div>
                        </div>
                      )}
                    </Col>
                  );
                })}
              </Row>
            </Card>
          ))}
        </div>
      </Form>
    );
  };

  export default OverviewContent;
