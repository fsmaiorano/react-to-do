import { useEffect, useState } from "react";
import Task, { ITaskProps } from "./Task";

import clipboard from "../../assets/clipboard.svg";
import styles from "./TaskList.module.css";

export interface ITaskListProps {
  openedTasksCounter: (counter: number) => void;
  closedTasksCounter: (counter: number) => void;
}

export default function TaskList({
  openedTasksCounter,
  closedTasksCounter,
}: ITaskListProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Take a showe",
      isDone: false,
    },
    {
      id: 2,
      content: "Make a todo list",
      isDone: false,
    },
    {
      id: 3,
      content: "Cook a meal",
      isDone: true,
    },
  ]);

  useEffect(() => {
    handleTasksCounter(tasks);
  }, []);

  function handleTasksCounter(tasks: ITaskProps[]) {
    let openedTasks = tasks.filter((task) => !task.isDone).length;
    let closedTasks = tasks.filter((task) => task.isDone).length;

    if (openedTasks === undefined) openedTasks = 0;

    if (closedTasks === undefined) closedTasks = 0;

    openedTasksCounter(openedTasks);
    closedTasksCounter(closedTasks);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
    handleTasksCounter(tasksWithoutDeletedOne);
  }

  function isCheckedTask(id: number, isDone: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone,
        };
      } else return task;
    });

    setTasks(updatedTasks);
    handleTasksCounter(updatedTasks);
  }

  return (
    <section className={styles.taskList}>
      <>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              isDone={task.isDone}
              content={task.content}
              onDeleteTask={deleteTask}
              onCheckedTask={isCheckedTask}
            />
          ))
        ) : (
          <div>
            <img src={clipboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </>
    </section>
  );
}
