import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { ITaskProps } from "../task/Task";
import TaskList from "../task/TaskList";

import styles from "./Board.module.css";

export default function Board() {
  const [newTaskText, setNewTaskText] = useState("");
  const [openedTasksCounter, setOpenedTasksCounter] = useState<number>(0);
  const [closedTasksCounter, setClosedTasksCounter] = useState<number>(0);
  const [tasks, setTasks] = useState<ITaskProps[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, content: newTaskText, isDone: false },
    ]);
    setNewTaskText("");
    setOpenedTasksCounter(openedTasksCounter + 1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório");
  }

  function handleTasksChange(tasks: ITaskProps[]) {
    setTasks(tasks);
  }

  function handleOpenedTasksCounter(counter: number) {
    setOpenedTasksCounter(counter);
  }

  function handleClosedTasksCounter(counter: number) {
    setClosedTasksCounter(counter);
  }

  return (
    <>
      <section
        role="form"
        className={styles.formSection}
        onSubmit={handleCreateTask}
      >
        <form className={styles.form}>
          <input
            type="form"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit">
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
          tasks={tasks}
          onTasksChange={handleTasksChange}
          openedTasksCounter={handleOpenedTasksCounter}
          closedTasksCounter={handleClosedTasksCounter}
        />
      </main>
    </>
  );
}
