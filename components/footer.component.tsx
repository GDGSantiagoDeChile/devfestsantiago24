import styles from '@/styles/components/footer.module.scss';
import IconFacebook from './../assets/icons/ic_facebook.svg';
import IconInstagram from './../assets/icons/ic_instagram.svg';
import IconTwitter from './../assets/icons/ic_twitter.svg';
import IconDiscord from './../assets/icons/ic_discord.svg';
import IconDevFestLima from './../assets/icons/ic_devfestlima.svg'
import IconGDGOpen from './../assets/icons/ic_gdgopen_bn.svg';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.socialMedia}>
					<IconDevFestLima className={styles.logoPrimary} />
					<p className={styles.label}>Síguenos en</p>
					<Link href='https://web.facebook.com/devfest.lima' target='_blank' aria-label='Link Facebook'>
						<IconFacebook className={styles.socialMediaItem} />
					</Link>
					<Link href='https://www.instagram.com/devfest.lima/' target='_blank' aria-label='Link Instagram'>
						<IconInstagram className={styles.socialMediaItem} />
					</Link>
					<Link href='https://twitter.com/devfestlima' target='_blank' aria-label='Link Twitter'>
						<IconTwitter className={styles.socialMediaItem} />
					</Link>
				</div>
				<div className={styles.boxLink}>
					<IconGDGOpen className={styles.logoPrimary} />
					<Link className={styles.boxLinkItem} href='https://gdg.community.dev/gdg-open/' target='_blank'>
						Sobre el GDG Open Lima
					</Link>
					<Link className={styles.boxLinkItem} href='/code-conduct'>
						Código de conducta
					</Link>
					<Link className={styles.boxLinkItem} href='mailto:devfestlimaperu@gmail.com' target='_blank'>
						Contáctanos
					</Link>
					<IconGDGOpen className={styles.logoSecondary} />
				</div>
			</div>
		</footer>
	);
}
