import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/132529431?v=4",
      name: "Patrick Santos",
      role: "Dono do projeto",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      { type: "link", content: '<a href="#"> jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date("2025-02-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://sm.ign.com/ign_br/screenshot/default/295ff090b71ca278841c869d606b5ebc_q644.jpg",
      name: "Yusuke",
      role: "Lutador",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      { type: "link", content: '<a href="#"> jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date("2025-02-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
