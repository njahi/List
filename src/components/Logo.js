import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to='/'>
      <div style={{ display: "flex" }}>
        <img
          src='Furniture.jpg'
          alt='Weka logo'
          className={styles.logo}
        />
        <h2 style={{ marginTop: "30px" }}>..WEKA</h2>
      </div>
    </Link>
  );
}

export default Logo;
