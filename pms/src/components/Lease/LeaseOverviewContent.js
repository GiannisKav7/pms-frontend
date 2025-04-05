import React from "react";
import { Form, Divider, Card, Row, Col, Input } from "antd";
import { fieldConfig } from "../../config/leaseConfig";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { renderFieldByType } from "../customFunctions/fieldRenderer";
import styles from "./LeaseOverviewContent.module.css";
import CustomField from "../customElements/CustomField";

// Read-only component to display lease information
const LeaseOverviewReadOnly = ({ overviewGroups, leaseDetails}) => {
  
  return (
    <div className={styles.container}>
      <Card className={styles.card} title="Lease Overview" bordered={false}> 
        <Row justify="space-evenly" gutter={[16, 24]}>
          {overviewGroups.map((group) => (            
            <Col span={4} key={group.title}>
              <span className={styles.groupTitle}>{group.title}</span>
              {group.fields.map((fieldKey) => {
                const label= fieldKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
                const fieldCfg = fieldConfig[fieldKey] || {};
                const fieldType = fieldCfg.type || "text";
                let displayValue = leaseDetails[fieldKey];

                if(fieldType === "date") {
                  const dateFormat = fieldCfg.format || "DD/MM/YYYY";
                  displayValue = dayjs(displayValue).format(dateFormat);
                }else if(fieldType === "number") {
                  displayValue = `${fieldCfg.prefix ? fieldCfg.prefix + " " : ""}
                  ${Number(displayValue).toLocaleString()}${fieldCfg.postfix ? " " + fieldCfg.postfix : ""}`;
                }else{
                  displayValue = displayValue || "-";
                }
                
                // Wrap certain field values in a link (for example, propertyCode)
                if(fieldKey === "propertyCode" && displayValue !== "-") {
                  displayValue = <Link to={`/property/${displayValue}`}>{displayValue}</Link>;
                }
                

                return (
                  <CustomField 
                  key={fieldKey}
                  fieldKey={fieldKey}
                  label={label}
                  displayValue={displayValue}
                  />
                );
              })}
            </Col>
          ))}
        </Row>
      </Card>   
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
                  <Col span={4} key={fieldKey}>
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
