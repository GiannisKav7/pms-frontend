import React from "react";
import { Form, Divider, Card, Row, Col, Input } from "antd";
import { fieldConfig } from "../../config/leaseConfig";
import dayjs from "dayjs";
import { renderFieldByType } from "../customFunctions/fieldRenderer";
import styles from "./LeaseOverviewContent.module.css";

// Read-only component to display lease information
const LeaseOverviewReadOnly = ({ overviewGroups, leaseDetails }) => {
  return (
    <div className={styles.container}>
      {overviewGroups.map((group) => (
        <Card
          key={group.title}
          title={
            <span>
              {group.icon && <span style={{ marginRight: 8 }}>{group.icon}</span>}
              {group.title}
            </span>
          }
          className={styles.card}
        >
          <Form gutter={16} disabled={false} layout="vertical">
            {group.fields.map((fieldKey) => {
              const label = fieldKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
              const fieldCfg = fieldConfig[fieldKey] || {};
              const isDateField = fieldCfg.type === "date";
              let displayValue = leaseDetails[fieldKey];

              if (isDateField) {
                displayValue = displayValue
                  ? dayjs(displayValue).format(fieldCfg.format || "DD/MM/YYYY")
                  : "";
              } else if (fieldCfg.type === "number") {
                displayValue = `${fieldCfg.prefix ? fieldCfg.prefix + " " : ""}${Number(
                  displayValue
                ).toLocaleString()}${fieldCfg.postfix ? " " + fieldCfg.postfix : ""}`;
              } else {
                displayValue = `${displayValue}`;
              }
              
                return (
                  <Col span={20} key={fieldKey}>
                  <Form.Item
                    name={fieldKey}
                    label={label}
                    layout="vertical"
                    className={styles.formItemCompact}
                  >
                    <div className={styles.readOnlyField}>
                      <span>{displayValue}</span>
                    </div>
                  </Form.Item>
                  </Col>
                );
            })}
          </Form>
        </Card>
      ))}
    </div>
  );
};

// Editable component using Ant Design Form
const LeaseOverviewEdit = ({ form, overviewGroups }) => {
  return (
    <Form form={form} layout="vertical">
      <Divider>Edit Lease Information</Divider>
      <div className={styles.container}>
        {overviewGroups.map((group) => (
          <Card key={group.title} title={group.title} className={styles.card}>
            <Row gutter={16}>
              {group.fields.map((fieldKey) => {
                const label = fieldKey
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase());
                const fieldCfg = fieldConfig[fieldKey] || {};
                return (
                  <Col span={24} key={fieldKey}>
                    <Form.Item name={fieldKey} label={label} style={{ marginBottom: 16 }}>
                      {renderFieldByType(fieldKey, fieldCfg, form)}
                    </Form.Item>
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

const LeaseOverviewContent = ({ form, overviewGroups, leaseDetails}) => {
  return (
    <>
      <LeaseOverviewReadOnly overviewGroups={overviewGroups} leaseDetails={leaseDetails} />
    </>
  );
};

export default LeaseOverviewContent;
