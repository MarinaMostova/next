import PostsList from "@/components/PostsList/PostsList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Posts</h1>
        <PostsList />
      </div>
    </main>
  );
}
