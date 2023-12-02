import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/asset'>Assets</NavLink>
        </li>
        <li>
          <NavLink to='/reports'>Sales</NavLink>
        </li>
        <li>
          <NavLink
            to='/register'
            className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
