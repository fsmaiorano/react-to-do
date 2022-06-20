import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
  onDeleteTask?: (id: number) => void;
  onCheckedTask?: (id: number, isDone: boolean) => void;
}

export default function Task({
  id,
  isDone,
  content,
  onDeleteTask,
  onCheckedTask,
}: ITaskProps) {
  function handleDeleteTask(id: number) {
    onDeleteTask!(id);
  }

  function handleCheckedTask(id: number, isDone: boolean) {
    onCheckedTask!(id, !isDone);
  }

  return (
    <article className={styles.task}>
      <div className={styles.checkboxRounded}>
        <input
          type="checkbox"
          defaultChecked={isDone}
          id={id.toString()}
          onChange={() => handleCheckedTask(id, isDone)}
        />
        <label htmlFor={id.toString()}></label>
      </div>
      <p className={isDone ? styles.isDone : ""}>{content}</p>
      <button onClick={() => handleDeleteTask(id)}>
        <Trash size={20} />
      </button>
    </article>
  );
}
