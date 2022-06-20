import Header from "./components/header/Header";
import Board from "./components/board/Board";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Board />
      </div>
    </>
  );
}

export default App;
