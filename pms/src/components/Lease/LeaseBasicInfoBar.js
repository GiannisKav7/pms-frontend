import React from "react";
import { Row, Col, Tag } from "antd";
import dayjs from "dayjs";
import styles from "./LeaseBasicInfoBar.module.css";

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
    <div className={styles.container}>
      <Row justify="space-between" align="middle">
        {/* Left Column */}
        <Col className={styles.leftColumn}>
          <Row gutter={[16, 16]} align="bottom">
            <Col>
              <div className={styles.leaseName}>{leaseName}</div>
            </Col>
            <Col>
              <div className={styles.leaseCode}>{leaseCode}</div>
            </Col>
            <Col>
              <div className={styles.customerCode}>{customerCode}</div>
            </Col>
            
          </Row>
          <Row gutter={[16, 16]}>
            <Col>
              <div className={styles.leaseType}>{leaseType}</div>
            </Col>
            <Col>
              <Tag color={statusColor}>{status}</Tag>
            </Col>
          </Row>
        </Col>
        {/* Right Column */}
        <Col className={styles.rightColumn}>
          <Row justify="end" align="middle">
            <div className={styles.rentMonthly}>
              Rent Monthly: {rentMonthly} EUR
            </div>
          </Row>
          <div className={styles.dateRange}>
            {dayjs(leaseFromDate).format("DD MMM YYYY")} - {dayjs(leaseToDate).format("DD MMM YYYY")}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LeaseBasicInfoBar;