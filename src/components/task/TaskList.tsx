import { useState } from "react";
import Task from "./Task";

import clipboard from "../../assets/clipboard.svg";
import styles from "./TaskList.module.css";

export default function TaskList() {
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

  function deleteTask(id: number) {
    console.log(id);
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
  }

  function isCheckedTask(id: number, isDone: boolean) {
    debugger;
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone,
        };
      } else return task;
    });

    setTasks(updatedTasks);
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
