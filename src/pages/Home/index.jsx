import { useEffect } from "react";
import styles from "./Home.module.css"
import { Link } from "react-router-dom";


function Home() {

    useEffect(() => {
        const btn = document.querySelectorAll(`.${styles.btn}`);
        btn.forEach(btn => {
            btn.onmousemove = function (e) {
                const x = e.pageX - btn.offsetLeft;
                const y = e.pageY - btn.offsetTop;

                btn.style.setProperty('--eixoX', x + 'px');
                btn.style.setProperty('--eixoY', y + 'px');
            };
        });
    }, []);

    return (
        <section className={styles.home}>
            <div className='apresentacao'>
                <p>
                    Olá, sou <br />
                    <div className={styles.texto}>
                         <span></span>
                    </div>
                    Bem vindo!
                </p>
                <Link to="/sobre" className={styles.btn}>Saiba mais</Link>
            </div>
            <figure>
                <img className="img-home" src="/developer-red.svg" alt="imagem de Home" />
            </figure>
        </section>
    );
}
export default Home;