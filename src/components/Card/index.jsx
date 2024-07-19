import styles from "./Card.module.css"
import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BsArrowRightSquareFill } from "react-icons/bs";


function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaJava  className={styles.icone} />
                    <SiSpringboot className={styles.icone} />
                    <FaReact className={styles.icone} />
                    <RiJavascriptFill  className={styles.icone} />
                    <FaHtml5  className={styles.icone} />
                    <FaCss3Alt className={styles.icone} />
                </div>
                <a href={html_url} className={styles.botao}  target="_blank" rel="noopener noreferrer">
                    <BsArrowRightSquareFill className={styles.seta} />
                </a>
            </div>
        </section>
    );
}

export default Card; 
