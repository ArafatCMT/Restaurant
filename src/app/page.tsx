import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h2>Food Delivery App</h2>
      </main>
    </div>
  );
}
