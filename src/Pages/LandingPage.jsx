import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.homepage}>
      <Nav />
      <section>
        <h1>
          Own your assets.
          <br />
          Weka will manage and keep track of the sales.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link
          to='/register'
          className='cta'>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
