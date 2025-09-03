import { Users } from "./feature/User";
import Header from "./shared/components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Users />
      </main>
    </div>
  );
}

export default App;
