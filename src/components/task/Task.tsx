import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  id: number;
  content: string;
  onDeleteTask: (id: number) => void;
}

export default function Task({ id, content, onDeleteTask }: TaskProps) {
  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <article className={styles.task}>
      <div className={styles.checkboxRounded}>
        <input type="checkbox" id={id.toString()} />
        <label htmlFor={id.toString()}></label>
      </div>
      <p>{content}</p>
      <button onClick={() => handleDeleteTask(id)}>
        <Trash size={20} />
      </button>
    </article>
  );
}
