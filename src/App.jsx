import { Header } from "./Components//Header";

import { Post } from "./Components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo eveniet fugiat
         officia debitis alias commodi aspernatur cumque. Non esse qui voluptatum ab numquam facere. 
         Perspiciatis ullam molestias repellendus animi!"
          />

          <Post author="Gabriel buzil" content="Um novo post muito legal" />

          <Post
            author="Diego Fernandes"
            content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo eveniet fugiat
         officia debitis alias commodi aspernatur cumque. Non esse qui voluptatum ab numquam facere. 
         Perspiciatis ullam molestias repellendus animi!"
          />

          <Post author="Gabriela buzil" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}

export default App;
