import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DevFest Santiago de Chile 2024</Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/">Inicio</Link>
        <Link href="/speakers">Speakers</Link>
        <Link href="/sessions">Agenda</Link>
        <Link href="/location">Ubicación del evento</Link>
      </nav>
      <a href="https://lu.ma/gc4crls6" className={styles['register-button']}>
        Registrate
      </a>
      <button className={styles.burger} onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;