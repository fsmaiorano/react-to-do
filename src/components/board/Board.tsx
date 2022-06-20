import { useState } from "react";
import TaskList from "../task/TaskList";
import styles from "./Board.module.css";

export default function Board() {
  const [openedTasksCounter, setOpenedTasksCounter] = useState<number>(0);
  const [closedTasksCounter, setClosedTasksCounter] = useState<number>(0);

  function handleOpenedTasksCounter(counter: number) {
    setOpenedTasksCounter(counter);
  }

  function handleClosedTasksCounter(counter: number) {
    setClosedTasksCounter(counter);
  }

  return (
    <>
      <section className={styles.board}>
        <span className={styles.header}>
          Tarefas criadas
          <span className={styles.counter}>{openedTasksCounter}</span>
        </span>
        <span className={styles.header}>
          Concluídas<span className={styles.counter}>{closedTasksCounter}</span>
        </span>
      </section>
      <main className={styles.content}>
        <TaskList
          openedTasksCounter={handleOpenedTasksCounter}
          closedTasksCounter={handleClosedTasksCounter}
        />
      </main>
    </>
  );
}
