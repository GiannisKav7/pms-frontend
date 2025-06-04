import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const items = [
  { label: "Overview", path: "/overview", icon: "🏠" },
  { label: "Unit(s)", path: "/units", icon: "🏢" },
  { label: "Charge Schedules", path: "/charge-schedules", icon: "💰" },
  { label: "Amendments", path: "/amendments", icon: "✍️" },
  { label: "Clauses", path: "/clauses", icon: "📜" },
  { label: "Options", path: "/options", icon: "⚙️" },
  { label: "Contacts", path: "/contacts", icon: "📇" },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <button className={styles.collapseBtn} onClick={toggleCollapse}>
        {collapsed ? "»" : "«"}
      </button>
      <ul className={styles.list}>
        {items.map((item) => (
          <li
            key={item.path}
            className={styles.item}
            onClick={() => navigate(item.path)}
          >
            <span className={styles.icon}>{item.icon}</span>
            {!collapsed && <span className={styles.label}>{item.label}</span>}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar;
