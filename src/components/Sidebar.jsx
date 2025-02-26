import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1693773687129-d336caa472d0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/132529431?v=4" />
        <strong>Patrick Santos</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
