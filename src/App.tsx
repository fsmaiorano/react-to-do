import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Board from "./components/board/Board";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <Board />
      </div>
    </>
  );
}

export default App;
