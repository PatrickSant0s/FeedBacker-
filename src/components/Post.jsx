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

  // Agora cada comentário terá um id único
  const [comments, setComments] = useState([
    { id: 1, text: "Post muito bacana, Hein?!" },
  ]);

  const [newCommentText, setnewCommentText] = useState("");

  function handleCreateNewCommentChange(event) {
    event.target.setCustomValidity("");
    setnewCommentText(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();
    const newComment = {
      id: Date.now(), // Gera um ID único baseado no timestamp
      text: newCommentText,
    };
    setComments([...comments, newComment]);
    setnewCommentText("");
  }

  function DeleteComment(commentId) {
    // Filtra os comentários mantendo todos menos o que tem o ID especificado
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment.text}
            onDeleteComment={() => DeleteComment(comment.id)}
          />
        ))}
      </div>
    </article>
  );
}
