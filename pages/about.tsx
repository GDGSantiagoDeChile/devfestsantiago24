import styles from '@/styles/pages/about.module.scss';
import Image from "next/image";
import About1 from './../assets/images/about-1.png';
import About2 from './../assets/images/about-2.png';
import About3 from './../assets/images/about-3.png';
import Footer from '@/components/footer.component';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';

export default function About() {

    useEffect( () => {document.body.classList.remove('noScroll');} );

    return <>
        <HeadPage namePage='about' titlePage='Acerca de' />
        <Header/>
        <main className={styles.container}>
            <article>
                <section className={styles.about}>
                    <div className={styles.boxText}>
                        <h1 className={styles.title}>¿Qué es el DevFest Santiago?</h1>
                        <p className={styles.paragraph}>
                        Los DevFests son conferencias para desarrolladores sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs. 
                        </p>
                        <p className={styles.paragraph}>
                        Los ponentes provienen de entre los Google Developer Experts y ponentes de la comunidad. Un encuentro organizado para desarrolladores con mucho contenido, networking y aprendizaje. 
                        </p>
                        <p className={styles.paragraph}>
                        Los DevFests son eventos organizados por los GDGs, grupos que forman parte del programa de comunidades para desarrolladores de Google.
                        </p>
                    </div>
                    <div className={styles.boxImg}>
                        <Image
                            src={About1}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                </section>
                <section className={styles.about}>
                    <div className={styles.boxImg}>
                        <Image
                            src={About2}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                    <div className={styles.boxText}>
                        <h2 className={styles.title}>¿Quienes pueden participar?</h2>
                        <p className={styles.paragraph}>
                        Este evento está orientado para profesionales del sector, estudiantes universitarios y técnicos interesados en la tecnología y personas interesadas en la tecnología.
                        </p>
                    </div>

                </section>
                <section className={styles.about}>
                    <div className={styles.boxText}>
                        <h2 className={styles.title}>¿Por qué participar?</h2>
                        <p className={styles.paragraph}>
                            Invitamos a todos a participar de este evento por las siguientes razones:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><b>Aprendizaje:</b> Estarás en un ambiente de aprendizaje en el que expositores provenientes de diferentes países y de Perú se juntan para compartir con la comunidad, conocimiento relacionado a los proyectos en los que se encuentran involucrados.</li>
                            <li className={styles.listItem}><b>Networking:</b> Este evento te brindará la oportunidad de conectarse con otras personas interesadas en tecnología, entre estudiantes y profesionales del sector.</li>
                            <li className={styles.listItem}><b>Diversión:</b> Por último, pero no menos importante, pasarás un momento de forma divertida y emocionante donde aprenderás cosas nuevas y que te permitirán mejorar profesionalmente.</li>
                        </ul>
                    </div>
                    <div className={styles.boxImg}>
                        <Image
                            src={About3}
                            alt="Equipo tech"
                            width={350}
                            height={350}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '350px',
                                height: 'auto',
                                width: "100%",
                            }} />
                    </div>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}
