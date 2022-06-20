import { PlusCircle } from "phosphor-react";
import styles from "./Form.module.css";

export default function Form() {
  return (
    <section role="form" className={styles.formSection}>
      <form className={styles.form}>
        <input type="form" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </section>
  );
}
