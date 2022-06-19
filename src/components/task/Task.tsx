import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  id: string;
  content: string;
}

export default function Task({ id, content }: TaskProps) {
  return (
    <article className={styles.task}>
      <div className={styles.checkboxRounded}>
        <input type="checkbox" id={id} />
        <label htmlFor={id}></label>
      </div>
      <p>{content}</p>
      <button>
        <Trash size={20}/>
      </button>
    </article>
  );
}
