import styles from "./Post.module.css";

import Author from "../assets/Author.svg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={Author} alt="" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado hà 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href=""> jane.design/doctorcare</a>
        </p>

        <p>
          {" "}
          <a href="">#novoprojeto </a>
          {""} <a href="">#nlw</a> <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deise seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Puclicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
