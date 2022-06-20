import { useEffect, useState } from "react";
import Task, { ITaskProps } from "./Task";

import clipboard from "../../assets/clipboard.svg";
import styles from "./TaskList.module.css";

export interface ITaskListProps {
  tasks: ITaskProps[];
  onTasksChange: (tasks: ITaskProps[]) => void;
  openedTasksCounter: (counter: number) => void;
  closedTasksCounter: (counter: number) => void;
}

export default function TaskList({
  tasks,
  onTasksChange,
  openedTasksCounter,
  closedTasksCounter,
}: ITaskListProps) {
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
    handleTasksCounter(tasksWithoutDeletedOne);
    onTasksChange(tasksWithoutDeletedOne);
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

    handleTasksCounter(updatedTasks);
    onTasksChange(updatedTasks);
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
