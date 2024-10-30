import Footer from '@/components/footer.component';
import styles from '@/styles/pages/mentors.module.scss';
import Header from '@/components/header.component';
import HeadPage from '@/components/head.component';
import { useEffect } from 'react';
import Image from "next/image";
import { dataMentors } from '@/data/dataMentors';
import IconLinkedIn from './../assets/icons/ic_linkedin.svg';
import Link from 'next/link';

const basePath = '/./assets/images/speakers/';

export default function Mentors() {

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return <>
        <HeadPage namePage='mentors' titlePage='Speakers' />
        <Header />
        <main className={styles.container}>
            <article className={styles.containerArticle}>
                <section className={styles.sectionText}>
                    <h1 className={styles.title}>Speakers</h1>
                    <div className={styles.mentorsGroup}>
                        {dataMentors && dataMentors.map(mentors =>
                            <div className={styles.mentorItem} key={mentors.speaker}>
                                <Image
                                    className={styles.img}
                                    src={`${basePath}/${mentors.photo}`}
                                    alt={mentors.speaker}
                                    width={150}
                                    height={150}
                                    priority={true}
                                    sizes="100vw"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        width: "150px",
                                    }} />
                                <Link href={`${mentors.url}`} target='_blank'>
                                    <IconLinkedIn className={styles.btnLinkedIn} />
                                </Link>
                                <p className={styles.name}>{mentors.speaker}</p>
                                <p className={styles.description}>{mentors.description}</p>
                            </div>
                        )}
                    </div>
                </section>
            </article>
        </main>
        <Footer />
    </>;
}

