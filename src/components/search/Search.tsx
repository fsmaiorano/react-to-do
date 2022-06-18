import { PlusCircle } from "phosphor-react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <section role="search" className={styles.searchSection}>
      <form className={styles.searchForm}>
        <input type="search" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </section>
  );
}
