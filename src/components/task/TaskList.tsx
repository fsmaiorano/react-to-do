import styles from "./TaskList.module.css";
import clipboard from "../../assets/clipboard.svg";

export default function TaskList() {
  return (
    <section className={styles.taskList}>
      <div>
        <img src={clipboard}/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
}
