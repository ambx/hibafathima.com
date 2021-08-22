import styles from "./styles.module.scss";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hiba Fathima</h1>
      <Navbar />
    </header>
  );
}
