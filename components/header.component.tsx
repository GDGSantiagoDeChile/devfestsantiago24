import styles from '@/styles/components/header.module.scss';
import IconGdscPeru from './../assets/icons/ic_isotipo_gdsc.svg';
import IconMenu from './../assets/icons/ic_menu.svg';
import IconClose from './../assets/icons/ic_close.svg';
import IconDiscord from './../assets/icons/ic_discord-black.svg';
import Link from 'next/link';
import React from 'react';

export default function Header() {

	const [isOpenMenu, setIsOpenMenu] = React.useState(false);

	function handleMenu() {
		setIsOpenMenu(!isOpenMenu);
		!isOpenMenu ? document.body.classList.add('noScroll') : document.body.classList.remove('noScroll');
	}

	return (
		<>
			{/* <section className={styles.banner}>
				<Link className={styles.btnLink} href='https://discord.gg/qHkbvDs2AB'><IconDiscord className={styles.btnDiscord} viewBox='0 0 60 30' /> Únete a nuestro canal de Discord<span>y entérate de las novedades</span></Link>
			</section> */}
			<header className={styles.header}>
				<IconGdscPeru className={styles.btnClose} viewBox='0 0 80 40' />
				<nav className={`${isOpenMenu ? `${styles.menu} ${styles.menuMobile}` : `${styles.menu}`}`} >
					<div className={styles.buttonClose} onClick={handleMenu}>
						<IconClose className={styles.btn} viewBox='0 0 20 20' />
					</div>
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Inicio' href='/'>
								Inicio
							</Link>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Acerca de' href='/about'>
								Acerca de
							</Link>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Speakers' href='/mentors'>
								Speakers
							</Link>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Agenda' href='/schedule'>
								Agenda
							</Link>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Código de conducta' href='/code-conduct'>
								Código de conducta
							</Link>
						</li>
						<li className={styles.listItem}>
							<Link className={styles.linkItem} aria-label='Preguntas frecuentes' href='/faq'>
								FAQs
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.buttonNav} onClick={handleMenu}>
					<IconMenu className={styles.btn} viewBox='0 0 15 15' />
				</div>
			</header>
		</>
	);
}
