import styles from "./Task.module.css";

export default function Task() {
  return (
    <main className={styles.tasks}>
      <span className={styles.header}>
        Tarefas criadas<span className={styles.counter}>0</span>
      </span>
      <span className={styles.header}>
        Concluídas<span className={styles.counter}>0</span>
      </span>
    </main>
  );
}
