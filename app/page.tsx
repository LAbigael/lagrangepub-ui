import styles from "./page.module.css";
import Upload from "./components/Upload"


export default function Home() {
  return (
    <main className={styles.main}>
      <Upload />
    </main>
  );
}
