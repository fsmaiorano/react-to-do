import styles from "./Task.module.css";
import TaskList from "./TaskList";

export default function Task() {
  return (
    <>
      <section className={styles.task}>
        <span className={styles.header}>
          Tarefas criadas<span className={styles.counter}>0</span>
        </span>
        <span className={styles.header}>
          Concluídas<span className={styles.counter}>0</span>
        </span>
      </section>
      <main className={styles.taskList}>
        <TaskList />
      </main>
    </>
  );
}
