import React from "react";
import { Card, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const pages = [
    { title: "Lease Page", path: "/lease/1" }, // Dummy ID for navigation
    { title: "Unit Page", path: "/unit/1" },
    { title: "Legal Entity Owner Page", path: "/legalentity/1" },
    { title: "Contact Page", path: "/contact/1" },
    { title: "Property Page", path: "/property/1" },
    { title: "Room Page", path: "/room/1" },
    { title: "Building Page", path: "/building/1" },
    { title: "Floor Page", path: "/floor/1" },
    { title: "Unit Type Page", path: "/unittype/1" },
  ];

  return (
    <div style={{ padding: 24, background: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Dashboard</h1>
      <Row gutter={[16, 16]}>
        {pages.map((page) => (
          <Col xs={24} sm={12} md={8} lg={6} key={page.path}>
            <Card hoverable style={{ textAlign: "center" }}>
              <h3>{page.title}</h3>
              <Button type="primary" onClick={() => navigate(page.path)}>
                Go to {page.title}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
