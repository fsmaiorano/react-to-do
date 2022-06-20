import { useState } from "react";
import { ITaskProps } from "../task/Task";
import TaskList from "../task/TaskList";
import styles from "./Board.module.css";

export default function Board() {
  const [openedTasksCounter, setOpenedTasksCounter] = useState<number>(0);
  const [closedTasksCounter, setClosedTasksCounter] = useState<number>(0);

  function handleOpenedTasksCounter(counter: number) {}

  function handleClosedTasksCounter(counter: number) {}

  return (
    <>
      <section className={styles.board}>
        <span className={styles.header}>
          Tarefas criadas
          <span className={styles.counter}>{0}</span>
        </span>
        <span className={styles.header}>
          Concluídas<span className={styles.counter}>{0}</span>
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
