import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

interface NavbarPage {
  title: string;
  path: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const pages: NavbarPage[] = [
    { title: "Search", path: "/search" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        MyLogo
      </div>
      <div className={styles.navLinks}>
        {pages.map((page) => (
          <div
            key={page.title}
            className={styles.navLink}
            onClick={() => navigate(page.path)}
          >
            {page.title}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
