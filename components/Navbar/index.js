import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <li className={styles.navbarItem}>
        <a href="">work</a>
      </li>
      <li className={styles.navbarItem}>
        <a href="https://almost.hibafathima.com/">blog</a>
      </li>
      <li className={styles.navbarItem}>
        <a href="">contact</a>
      </li>
    </nav>
  );
}
