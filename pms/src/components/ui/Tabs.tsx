import { useState } from "react";
import styles from "./Tabs.module.css";

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeaders}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`${styles.tabButton} ${
              active === index ? styles.active : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;
