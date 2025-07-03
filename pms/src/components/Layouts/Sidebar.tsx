import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";


export interface SidebarItem {
    label: string,
    path: string,
    icon: IconType,
};

interface SidebarProps {
  items: SidebarItem[];
};


const Sidebar: React.FC <SidebarProps> = ({items}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('');
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li
            key={item.path}
            className={`${styles.item} ${selected === item.path ? styles.selected : ""}`}
            onClick={() => {
              navigate(item.path);
              setSelected(item.path);
            }}
          >
            <span className={styles.icon}>{<item.icon />}</span>
            {!collapsed && <span className={styles.label}>{item.label}</span>}
          </li>
        ))}
      </ul>
      <button className={styles.collapseBtn} onClick={toggleCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </button>
    </div>
  );
};

export default Sidebar;
