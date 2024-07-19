import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./Contatos.module.css"

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato comigo</h3>
            <h3>para mais informações</h3>
            <p>E para que posssamos conversar mais sobre.</p>

            <div className={styles.icones}>

                <a className={styles.link} href="mailto:flaviophalmeida@gmail.com" target="_blank" rel="noopener noreferrer">
                    <GoMail className={styles.icone} />
                </a>

                <a className={styles.link} href="https://www.instagram.com/fl4viox/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className={styles.icone} />
                </a>

                <a className={styles.link} href=" https://wa.me/qr/5G7H5EYTH4CDF1" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className={styles.icone} />
                </a>

                <a className={styles.link} href="https://github.com/flavio-ph" target="_blank" rel="noopener noreferrer">
                    <BsGithub className={styles.icone} />
                </a>

                <a className={styles.link} href="https://www.linkedin.com/in/fl%C3%A1vio-almeida-21124a28a/" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
    );

}

export default Contatos;
