import styles from "./Pagina404.module.css";
function Page404() {
    return (
        <>
            <h2 className={styles.titulo2}>Ops! Parece que você se perdeu!</h2><div className={styles.textos}>
                <span className={styles.num_erro}>404</span> <br />
                <strong className={styles.mensagem_erro}>Página não localizada!</strong>
            </div>
        </>

    );
}

export default Page404;