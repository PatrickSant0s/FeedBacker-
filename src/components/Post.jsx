import { format } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm 'h'"
  );

  const [comments, setComments] = useState(["Post muito bacana, Hein?!"]);

  const [newCommentText, setnewCommentText] = useState("");

  function handleCreateNewCommentChange() {
    setnewCommentText(event.target.value);
  }

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setnewCommentText("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" className={styles.avatar} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="" dateTime="2024-11-21 14:19:30">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}></div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onChange={handleCreateNewCommentChange}
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
        ></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
