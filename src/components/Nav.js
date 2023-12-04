import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <Link to='/manage'>Assets</Link>
        </li>
        <li>
          <Link to='/sales'>Sales</Link>
        </li>
        <li>
          <Link
            to='/login'
            className={styles.ctaLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
