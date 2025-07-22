import { Header } from "./Components//Header";

import { Post } from "./Components/Post";

import styles from "./App.module.css";

import { Sidebar } from "./Components/Sidebar";

import "./global.css";
import { Avatar } from "./Components/Avatar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO  @ Rocketseat",
    },
    content: [
      { tipe: "paragraph", content: "  Fala galeraa 👋 " },

      {
        tipe: "paragraph",
        content:
          "    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { tipe: "link", content: " jane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-05-03 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Myke Brito",
      role: "Educador  @ Rocketseat",
    },
    content: [
      { tipe: "paragraph", content: "  Fala galeraa 👋 " },

      {
        tipe: "paragraph",
        content:
          "    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { tipe: "link", content: " jane.design/doctorcare" },
    ],

    publishedAt: new Date("2022-05-15 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
