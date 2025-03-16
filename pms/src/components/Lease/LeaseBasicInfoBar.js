import React from "react";
import { Card, Row, Col, Tag } from "antd";
import dayjs from "dayjs";

const LeaseBasicInfoBar = ({ leaseDetails }) => {
  const {
    leaseCode,
    leaseName,
    leaseType,
    status,
    customerCode,
    rentMonthly,
    leaseFromDate,
    leaseToDate,
  } = leaseDetails;

  const statusColor = status === "Active" ? "green" : "red";

  return (
    <Card style={{ width: "100%", borderRadius: 0 }}>
      <Row justify="space-between" align="middle">
        {/* Left Column */}
        <Col>
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <div style={{ fontSize: 16, fontWeight: "bold" }}>
                {leaseName}
              </div>
            </Col>
            <Col>
              <div style={{ fontSize: 12, color: "#999" }}>{leaseCode}</div>
            </Col>
            <Col>
              <div style={{ fontSize: 12, color: "#999" }}>{customerCode}</div>
            </Col>
            <Col>
              <Tag color={statusColor}>{status}</Tag>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col>
              <strong>{leaseType}</strong>
            </Col>
          </Row>
        </Col>
        {/* Right Column */}
        <Col>
          <Row justify="end" align="middle">
            <div style={{ fontWeight: "lighter" }}>
              Rent Monthly: {rentMonthly} EUR
            </div>
          </Row>
          <div style={{ fontSize: 12, color: "#999" }}>
            {leaseFromDate.format("DD MMM YYYY")} - {leaseToDate.format("DD MMM YYYY")}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default LeaseBasicInfoBar;