import Link from "next/link";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <h1>Welcome to my homepage!</h1>
      </div>
    </main>
  );
}
