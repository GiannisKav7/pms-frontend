import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";

interface Page {
  title: string;
  path: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const pages: Page[] = [
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
    <>
      <Navbar />
      <div style={{ padding: 24, background: "#f9f9f9" }}>
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Dashboard</h1>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "-8px" }}>
          {pages.map((page) => (
            <div
              key={page.path}
              style={{
                flex: "0 0 calc(33.33% - 16px)",
                margin: "8px",
                border: "1px solid #d9d9d9",
                borderRadius: "4px",
                padding: "16px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{page.title}</h3>
              <button
                style={{
                  backgroundColor: "#1890ff",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(page.path)}
              >
                Go to {page.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
