import React from "react";
import { Card, Row, Col, Tag } from "antd";

const BasicInfoBar = ({ leaseDetails }) => {
  const { leaseCode, leaseName, leaseType, status } = leaseDetails;
  
  const statusColor = status === "Active" ? "green" : "red";
  
  return (
    <Card style={{ width: "100%", borderRadius: 0 }}>
      {/* Top row: Name (bold), Code (small text), and Status Tag */}
      <Row justify="space-between" align="middle">
        <Col>
          {/* Lease Name in bold, bigger font */}
          <div style={{ fontSize: 16, fontWeight: "bold" }}>
            {leaseName}
          </div>
          {/* Lease Code as sub-label */}
          <div style={{ fontSize: 12, color: "#999" }}>
            {leaseCode}
          </div>
        </Col>
        <Col>
          {/* Status displayed as a Tag */}
          <Tag color={statusColor}>{status}</Tag>
        </Col>
      </Row>

      {/* Second row (optional): Additional fields to the right */}
      <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
        <Col>
          <strong>Lease Type:</strong> {leaseType}
        </Col>
        {/* Add more fields if needed */}
      </Row>
    </Card>
  );
};

export default BasicInfoBar;