import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/pages/code-conduct.module.scss';
import Link from 'next/link';
import Image from "next/image";
import Android from '../public/assets/images/android.gif';
import { useEffect } from 'react';

const CodigoConducta = () => {

    useEffect(() => {
        document.body.classList.remove('noScroll');
    }, []);

    return (
        <>
            <Header />
            <main className={styles.container}>
                <article className={styles.containerArticle}>
                    <section className={styles.sectionText}>
                        <h1 className={styles.title}>Código de Conducta</h1>
                        <p className={styles.paragraph}>
                            El objetivo de las normas de la comunidad es fomentar el debate abierto y sano que siempre ha formado parte de nuestra cultura. Las siguientes directrices son una política oficial y se aplican a tus comunicaciones con otras personas en el entorno laboral.
                        </p>
                        <p className={styles.paragraph}>
                            <b>Sé responsable.</b> Todo lo que dices y haces es importante. Eres responsable de tus palabras y acciones.
                        </p>
                        <p className={styles.paragraph}>
                            <b>Sé constructivo.</b> Tu voz es tu contribución; haz que sea productiva.
                        </p>
                        <p className={styles.paragraph}>
                            <b>Sé prudente.</b> Tus comentarios se pueden atribuir a Google independientemente de cuál sea tu intención, por lo que deberías procurar no hacer comentarios que puedan inducir a alguien a hacer suposiciones incorrectas.
                        </p>
                        <p className={styles.paragraph}>
                            Lee las normas de la comunidad <Link href="https://about.google/community-guidelines/" className={styles.link}>aquí</Link>.
                        </p>
                    </section>
                    <section className={styles.sectionImg}>
                        <Image
                            src={Android}
                            alt="Icono de Android"
                            width={400}
                            height={400}
                            priority={true}
                            sizes="100vw"
                            style={{
                                maxWidth: '400px',
                                height: 'auto',
                                width: "100%",
                            }}
                        />
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default CodigoConducta;
