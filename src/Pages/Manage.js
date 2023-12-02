import Nav from "../components/Nav";
import styles from "./Sales.module.css";

export default function Manage() {
  return (
    <main className={styles.product}>
      <Nav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img
          src='dreamer.png'
          alt='overview of a large city with skyscrapers'
        />
      </section>
    </main>
  );
}
