import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { ITaskProps } from "../task/Task";
import TaskList from "../task/TaskList";

import styles from "./Board.module.css";

export default function Board() {
  const [newTaskText, setNewTaskText] = useState("");
  const [closedTasksCounter, setClosedTasksCounter] = useState<number>(0);
  const [tasks, setTasks] = useState<ITaskProps[]>([]);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, content: newTaskText, isDone: false },
    ]);
    setNewTaskText("");
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
        <div className={styles.header}>
          <span>Tarefas criadas</span>
          <span className={styles.counter}>{tasks.length}</span>
        </div>
        <div className={styles.header}>
          <span>Concluídas</span>
          <span className={styles.counterLarge}>
            {closedTasksCounter} de {tasks.length}
          </span>
        </div>
      </section>
      <main className={styles.content}>
        <TaskList
          tasks={tasks}
          onTasksChange={handleTasksChange}
          closedTasksCounter={handleClosedTasksCounter}
        />
      </main>
    </>
  );
}
