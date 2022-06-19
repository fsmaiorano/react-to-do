import Task from "./Task";

import clipboard from "../../assets/clipboard.svg";

import styles from "./TaskList.module.css";

export default function TaskList() {
  const tasks = [
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
  ];

  return (
    <section className={styles.taskList}>
      <>
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <Task key={task.id} id={task.id.toString()} content={task.content} />
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
