import TaskList from "../task/TaskList";
import styles from "./Board.module.css";

export default function Board() {
  return (
    <>
      <section className={styles.board}>
        <span className={styles.header}>
          Tarefas criadas<span className={styles.counter}>0</span>
        </span>
        <span className={styles.header}>
          Concluídas<span className={styles.counter}>0</span>
        </span>
      </section>
      <main className={styles.content}>
        <TaskList />
      </main>
    </>
  );
}
