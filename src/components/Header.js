import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.focia}>
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <Link to="/">Strona główna</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/about">O nas</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header
