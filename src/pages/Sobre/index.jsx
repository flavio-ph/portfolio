import { FaReact, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import styles from "./Sobre.module.css"
import avatar from "./images/luffyicon.jpg"

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h1>Sobre mim</h1> <br/>
                    <span>Sou Flávio Almeida </span> <br/>
                    <span className={styles.dev}>Desenvolvedor</span>

                    <p>Estudante de Sistemas de Informação</p>
                    <p>Estou em constante evolução, aguardem para mais...</p>

                    <p>Sou apaixonado por tranformar ideias em realidade vitual</p>

                    <p>Criação de aplicaçoes diânimcas e intuitivas, <br /> com foco na experiência do usuário</p>
                </div>
            </div>
            <div className={styles.techs}><h3>Tecnologias</h3></div>
            <div className={styles.icones}>
                <FaJava alt="Ícone do Java" className={styles.icone} />
                <SiSpring alt="Ícone do Spring" className={styles.icone} />
                <SiSpringboot  alt="Ícone do SpringBoot" className={styles.icone}/>
                <FaReact alt="Ícone do React" className={styles.icone} />
                <RiJavascriptFill alt="Ícone do JavaScript" className={styles.icone} />
                <FaHtml5 alt="Ícone do Html5" className={styles.icone} />
                <FaCss3Alt alt="Ícone do Css3" className={styles.icone} />
            </div>
        </section>

    );

}

export default Sobre;