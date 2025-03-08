import React from "react";
import { Card, Row, Col } from "antd";

const BasicInfoBar = ({ leaseDetails }) => {
  const { leaseCode, leaseName, leaseType, status } = leaseDetails;
  return (
    <Card style={{width: "100%", borderRadius: 0}}>
      <Row gutter={16}>
        <Col>
          <strong>Lease Code:</strong> {leaseCode}
        </Col>
        <Col>
          <strong>Lease Name:</strong> {leaseName}
        </Col>
        <Col>
          <strong>Lease Type:</strong> {leaseType}
        </Col>
        <Col>
          <strong>Status:</strong> {status}
        </Col>
      </Row>
    </Card>
  );
};

export default BasicInfoBar;