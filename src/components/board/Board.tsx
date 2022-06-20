import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import TaskList from "../task/TaskList";
import styles from "./Board.module.css";

export default function Board() {
  const [newTaskText, setNewTaskText] = useState("");
  const [openedTasksCounter, setOpenedTasksCounter] = useState<number>(0);
  const [closedTasksCounter, setClosedTasksCounter] = useState<number>(0);

  const isNewTaskInputEmpty = newTaskText.length === 0 ? true : false;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setNewTaskText("");
  }

  function handleOpenedTasksCounter(counter: number) {
    setOpenedTasksCounter(counter);
  }

  function handleClosedTasksCounter(counter: number) {
    setClosedTasksCounter(counter);
  }

  return (
    <>
      <section role="form" className={styles.formSection}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input type="form" placeholder="Adicione uma nova tarefa" />
          <button type="submit" disabled={isNewTaskInputEmpty}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
      </section>
      <section className={styles.boardSection}>
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
          onNewTask={newTaskText}
          openedTasksCounter={handleOpenedTasksCounter}
          closedTasksCounter={handleClosedTasksCounter}
        />
      </main>
    </>
  );
}
