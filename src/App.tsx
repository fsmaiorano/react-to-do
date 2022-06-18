import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Board from "./components/board/Board";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Search />
        <Board />
      </div>
    </>
  );
}

export default App;
