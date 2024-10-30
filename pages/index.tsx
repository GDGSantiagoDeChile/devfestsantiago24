import Header from '@/components/header.component';
import Footer from '@/components/footer.component';
import styles from '@/styles/pages/home.module.scss';
import Image from "next/image";
import IconCalendar from './../assets/icons/ic_calendar.svg';
import Banner from './../assets/images/home-1.png';
import IconTeam from './../assets/icons/ic_team.svg';
import IconTrophy from './../assets/icons/ic_trophy.svg';
import IconBadge from './../assets/icons/ic_badge.svg';
import IconGDGOpen from './../assets/icons/logo_gdg_open.png';
import Link from 'next/link';
import HeadPage from '@/components/head.component';
import Coding from './../assets/images/coding.gif';
import Holding from './../assets/images/holding.gif';
import Phone from './../assets/images/phone.gif';
import Working from './../assets/images/working.gif';
import { useEffect } from 'react';
import { dataCommunity } from '@/data/dataCommunity';
import LogoCodiGo from './../assets/images/sponsors/LogoCodiGo.png';
import LogoGoogle from './../assets/images/sponsors/Google.png';

export default function Home() {

  useEffect(() => { document.body.classList.remove('noScroll'); });

  return <>
    <HeadPage namePage='/' titlePage='Inicio' />
    <Header />
    <main className={styles.container}>
      <article className={styles.containerArticle}>
        <section className={styles.home}>
          <div className={styles.boxTitle}>
            <h2 className={styles.title}>¡Bienvenidos al DevFest Santiago 2024!</h2>
            <p className={styles.paragraph}>
              Conferencia orientada a la comunidad donde se tocarán temas sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.
            </p>
            <p className={`${styles.paragraph} ${styles.paragraphIcon}`}><IconCalendar className={styles.iconCalendar} /> 9 de Noviembre de 2024</p>
            <Link className={styles.btnSubmit} target='_blank' href={'https://lu.ma/gc4crls6'}>Regístrate gratis</Link>
          </div>
          <div className={styles.boxVideo}>
            <div className={styles.boxVideoItem}>
              <Image
                src={Coding}
                alt="Coding"
                width={350}
                height={350}
                className={styles.imageAnimated}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Phone}
                alt="Phone"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Working}
                alt="Working"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}>
              <Image
                src={Holding}
                alt="Holding"
                width={350}
                className={styles.imageAnimated}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "100%",
                }} />
            </div>
            <div className={styles.boxVideoItem}></div>
          </div>
        </section>
        <div className={styles.homeLine}>
          <h1>DevFest Santiago de Chile 2024</h1>
        </div>
        <section className={styles.about}>
          <h2 className={styles.title}>¡Prepárate para el DevFest Santiago!</h2>
          <p className={styles.paragraph}>
            Los DevFests son conferencias para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.
            Los ponentes provienen de entre los Google Developer Experts y ponentes de la comunidad. Un encuentro organizado para desarrolladores con mucho contenido, networking y aprendizaje.
            Los DevFests son eventos organizados por los GDGs, grupos que forman parte del programa de comunidades para desarrolladores de Google.
          </p>
        </section>
        <Image
          src={Banner}
          alt="Equipo tech"
          width={1200}
          height={350}
          priority={true}
          sizes="100vw"
          style={{
            maxWidth: '100%',
            height: 'auto',
            width: "100%",
          }} />
        <section className={styles.containerPhases}>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconTeam />
            </div>
            <p>Conecta con otros desarrolladores</p>
          </div>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconBadge />
            </div>
            <p>Comparte conocimiento</p>
          </div>
          <div className={styles.phaseItem}>
            <div className={styles.icon}>
              <IconTrophy />
            </div>
            <p>Invierte en tu crecimiento profesional</p>
          </div>
        </section>
        <section id='containerMap' className={styles.map}>
          <h2 className={styles.title}>Lugar del DevFest Santiago 2024</h2>
          <div className={styles.containerMap}>
            <iframe src="https://maps.app.goo.gl/Whu6G5d62Q1UKTzR7" title='map'></iframe>
          </div>
          <div className={styles.containerPlace}>
            <div className={styles.containerPlaceItem}>
              <h3 className={styles.place}>Santiago</h3>
              <p className={styles.subtitle}>9 de Noviembre, 09:00am (GMT-4)</p>
              <p className={styles.direction}>HUB Providencia</p>
              <p className={styles.direction}>881 Los Jesuitas, Providencia</p>
              <p className={styles.direction}>7501300</p>
            </div>
          </div>
        </section>
        <section className={`${styles.aboutSponsors} ${styles.sectionSponsors}`}>
          <h2 className={styles.title}>Sponsors</h2>
          <p className={styles.paragraph}>
            Su contribución ha sido fundamental esta iniciativa y queremos expresar nuestro más sincero agradecimiento.
          </p>
          <div className={styles.galleryLogo}>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://codigo.edu.pe/' target='_blank' aria-label='CodiGo'>
                <Image
                  src={LogoCodiGo}
                  alt="CodiGo"
                  width={350}
                  height={350}
                  priority={true}
                  sizes="100vw"
                  style={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                    height: '120px',
                    width: "auto",
                  }} />
              </Link>
            </div>
            <div className={styles.sponsorItem}>
              <Link className={styles.btnLink} href='https://developers.google.com/' target='_blank' aria-label='Google Developers'>
                <Image
                  src={LogoGoogle}
                  alt="Google Developers"
                  width={350}
                  height={350}
                  priority={true}
                  sizes="100vw"
                  style={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                    height: '120px',
                    width: "auto",
                  }} />
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Organizador</h2>
          <div className={styles.galleryLogo}>
            <Link className={styles.btnLink} href='https://gdg.community.dev/gdg-santiago-de-chile/' aria-label='Google Developer Group Santiago de Chile'>
              <Image
                src={IconGDGOpen}
                alt="GDG Open"
                width={350}
                height={350}
                priority={true}
                sizes="100vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  width: "375px",
                }} />
            </Link>
          </div>
        </section>
        <section className={styles.aboutSponsors}>
          <h2 className={styles.title}>Comunidades aliadas</h2>
          <p className={styles.paragraph}>
            Te gustaría apoyar este evento, ponte en contacto con nosotros y sé una comunidad aliada haciendo clic <Link className={styles.link} href='mailto:gdgsantiagodechile@gmail.com'>aquí</Link>.
          </p>
          <div className={styles.galleryLogo}>
            {
              dataCommunity && dataCommunity.map(community =>
                <div key={community.name}>
                  <Link className={styles.btnLink} href={`${community.url}?utm_source=landing&utm_medium=landing&utm_id=devfestSantiago2024`} target='_blank' aria-label={community.name}>
                    <Image
                      src={community.imageURL}
                      alt={community.name}
                      width={350}
                      height={350}
                      priority={true}
                      sizes="100vw"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        width: "375px",
                      }} />
                    <span className={styles.tooltip}>Más info</span>
                  </Link>
                </div>
              )
            }
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </>;
}
