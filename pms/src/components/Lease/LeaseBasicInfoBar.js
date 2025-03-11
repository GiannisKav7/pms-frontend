import React from "react";
import { Card, Row, Col, Tag } from "antd";

const LeaseBasicInfoBar = ({ leaseDetails }) => {
  const { leaseCode, leaseName, leaseType, status, customerCode} = leaseDetails;
  
  const statusColor = status === "Active" ? "green" : "red";
  
  return (
    <Card style={{ width: "100%", borderRadius: 0 }}>
        <Row justify="start" align="middle" gutter={[16, 16]}>
          <Col>
            <div style={{ fontSize: 16, fontWeight: "bold" }}>
              {leaseName}
            </div>
          </Col>
          <Col>
            <div style={{ fontSize: 12, color: "#999" }}>
              {leaseCode}
            </div>
          </Col>
          <Col>
            <div style={{ fontSize: 12, color: "#999" }}>
              {customerCode}
            </div>
          </Col>
          <Col>
            <Tag color={statusColor}>{status}</Tag>
          </Col>
        </Row>
        {/* Bottom row: Lease Type */}  
      <Row>   
          <strong>Lease Type:</strong> 
          <div style={{ marginLeft: 10 }}>{leaseType}</div>
      </Row>
    </Card>
  );
};

export default LeaseBasicInfoBar;