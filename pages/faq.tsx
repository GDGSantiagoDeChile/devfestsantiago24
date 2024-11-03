import Footer from '@/components/Footer';
import styles from '@/styles/pages/faq.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/Header';
import { useEffect } from 'react';
import Link from 'next/link';
import { dataQuestion } from '@/data/dataQuestion';

export default function Rules() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='faq' titlePage='Preguntas frecuentes' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <h1 className={styles.title}>Preguntas frecuentes</h1>
                    <div className={styles.mentorsGroup}>
                        {
                            dataQuestion && dataQuestion.map(question =>
                                <>
                                    <h2 className={styles.subtitle}>{question.question}</h2>
                                    <p className={styles.paragraph}>{question.answer}</p>
                                </>
                            )
                        }
                    </div>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

