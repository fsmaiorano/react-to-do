import Task from "./components/task/Task";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Search />
        <Task />
      </div>
    </>
  );
}

export default App;
