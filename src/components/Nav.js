import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/manage'>Assets</NavLink>
        </li>
        <li>
          <NavLink to='/sales'>Sales</NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
