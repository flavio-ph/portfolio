import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useState } from 'react';

function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
         <header className={styles.header}>
            <nav className={styles.nome}>
                <Link to="/" className={styles.link}>Flávio Almeida</Link>
            </nav>
            <nav>
                <ul className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`} onClick={toggleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">projetos</Link></li>
                    <li><Link to="/contatos">Contatos</Link></li>
                </ul>
            </nav>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
       
    );
}

export default Header;
