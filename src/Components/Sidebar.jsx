import styles from "./Sidebar.module.css";
import sidebarImage from "../assets/sidebar-Image.svg";
import imagemDePerfil from "../assets/imagem_de_perfil.svg";
import Author from "../assets/Author.svg";
import { Avatar } from "./Avatar";

import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src={sidebarImage}
          alt="imagem de fundo sidebar"
        />

        <div className={styles.profile}>
          <img src={Author} alt="imagem" />

          <strong>Diego Fernandes</strong>

          <span>Web developer</span>

          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu perfil
            </a>
          </footer>
        </div>
      </aside>
    </div>
  );
}
