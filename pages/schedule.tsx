import Footer from '@/components/footer.component';
import Header from './../components/header.component';
import styles from '@/styles/pages/schedule.module.scss';
import HeadPage from '@/components/head.component';
import { useEffect, useState } from 'react';
import { TrackOne, TrackTwo, TrackThree, TrackFour, TrackFive } from '@/data/dataTrack';


export default function Schedule() {
    const [indexTrack, setIndexTrack] = useState(1);
    const [isVisibleMap, setIsVisibleMap] = useState(false);

    useEffect(() => { document.body.classList.remove('noScroll'); });

    return (
        <>
            <HeadPage namePage='schedule' titlePage='Agenda' />
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>Agenda</h1>
                <p className={styles.textMap} onClick={() => setIsVisibleMap(!isVisibleMap)}>Ver Mapa</p>
                {
                    isVisibleMap && 
                    (
                        <img className={styles.photoMap} src={`/./assets/images/speakers/mapauni.png`} alt='Ver Mapa UNI' />
                    )
                }
                <p className={styles.tabs}>
                    <span className={`${styles.tab} ${indexTrack === 1 ? styles.active : ''}`} onClick={() => setIndexTrack(1)}>Track 1 - Auditorio FIEE</span>
                    <span className={`${styles.tab} ${indexTrack === 2 ? styles.active : ''}`} onClick={() => setIndexTrack(2)}>Track 2 - Auditorio CTIC</span>
                    <span className={`${styles.tab} ${indexTrack === 3 ? styles.active : ''}`} onClick={() => setIndexTrack(3)}>Track 3 - FIEE Salón 201</span>
                    <span className={`${styles.tab} ${indexTrack === 4 ? styles.active : ''}`} onClick={() => setIndexTrack(4)}>Track 4 - FIEE Salón 207</span>
                    <span className={`${styles.tab} ${indexTrack === 5 ? styles.active : ''}`} onClick={() => setIndexTrack(5)}>Workshop - FIEE Salón 208</span>
                </p>
                {
                    indexTrack === 1 && (
                        TrackOne && TrackOne.map(slot =>
                            <div className={styles.cardEvent} key={slot.theme}>
                                <p className={styles.title}>{slot.theme}</p>
                                <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                                {
                                    slot.photo && (
                                        <div className={styles.speaker}>
                                            <img className={styles.photo} src={`/./assets/images/speakers/${slot.photo}`} alt={slot.speaker} />
                                            <p className={styles.name}>{slot.speaker}</p>
                                        </div>
                                    )
                                }
                                <p className={styles.talkDescription}>
                                    {slot.description}
                                </p>
                            </div >
                        )
                    )
                }
                {
                    indexTrack === 2 && (
                        TrackTwo && TrackTwo.map(slot =>
                            <div className={styles.cardEvent} key={slot.theme}>
                                <p className={styles.title}>{slot.theme}</p>
                                <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                                {
                                    slot.photo && (
                                        <div className={styles.speaker}>
                                            <img className={styles.photo} src={`/./assets/images/speakers/${slot.photo}`} alt={slot.speaker} />
                                            <p className={styles.name}>{slot.speaker}</p>
                                        </div>
                                    )
                                }
                                <p className={styles.talkDescription}>
                                    {slot.description}
                                </p>
                            </div >
                        )
                    )
                }
                {
                    indexTrack === 3 && (
                        TrackThree && TrackThree.map(slot =>
                            <div className={styles.cardEvent} key={slot.theme}>
                                <p className={styles.title}>{slot.theme}</p>
                                <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                                {
                                    slot.photo && (
                                        <div className={styles.speaker}>
                                            <img className={styles.photo} src={`/./assets/images/speakers/${slot.photo}`} alt={slot.speaker} />
                                            <p className={styles.name}>{slot.speaker}</p>
                                        </div>
                                    )
                                }
                                <p className={styles.talkDescription}>
                                    {slot.description}
                                </p>
                            </div >
                        )
                    )
                }
                {
                    indexTrack === 4 && (
                        TrackFour && TrackFour.map(slot =>
                            <div className={styles.cardEvent} key={slot.theme}>
                                <p className={styles.title}>{slot.theme}</p>
                                <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                                {
                                    slot.photo && (
                                        <div className={styles.speaker}>
                                            <img className={styles.photo} src={`/./assets/images/speakers/${slot.photo}`} alt={slot.speaker} />
                                            <p className={styles.name}>{slot.speaker}</p>
                                        </div>
                                    )
                                }
                                <p className={styles.talkDescription}>
                                    {slot.description}
                                </p>
                            </div >
                        )
                    )
                }
                {
                    indexTrack === 5 && (
                        TrackFive && TrackFive.map(slot =>
                            <div className={styles.cardEvent} key={slot.theme}>
                                <p className={styles.title}>{slot.theme}</p>
                                <small className={styles.timetable}>{slot.start} - {slot.end}</small>
                                {
                                    slot.photo && (
                                        <div className={styles.speaker}>
                                            <img className={styles.photo} src={`/./assets/images/speakers/${slot.photo}`} alt={slot.speaker} />
                                            <p className={styles.name}>{slot.speaker}</p>
                                        </div>
                                    )
                                }
                                <p className={styles.talkDescription}>
                                    {slot.description}
                                </p>
                            </div >
                        )
                    )
                }
            </main>
            <Footer />
        </>
    )
}
