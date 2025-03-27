import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

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
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className={styles.deleteButton}
            >
              <Trash size={24} className={styles.trashIcon} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment} className={styles.likeButton}>
            <ThumbsUp className={styles.thumbsUp} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
