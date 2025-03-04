import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.Comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/132529431?v=4"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Patrick Santos</strong>
              <time
                title="21 de novembro ás 14:19"
                dateTime="2024-11-21 14:19:30"
              >
                Cerca de 1h atrás{" "}
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}></Trash>{" "}
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp></ThumbsUp>Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
