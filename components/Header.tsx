import Link from 'next/link';
import styles from '../styles/header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DevFest Santiago de Chile 2024</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Inicio</Link>
        <Link href="/speakers">Speakers</Link>
        <Link href="/sessions">Agenda</Link>
        <Link href="/location">Ubicación del evento</Link>
      </nav>
      <a href="https://lu.ma/gc4crls6" className={styles['register-button']}>
      Registrate
      </a>
    </header>
  );
};

export default Header;
