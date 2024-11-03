import styles from '../styles/eventDescription.module.scss';

const EventDescription = () => {
  return (
    <section className={styles['event-description']}>
      <div className={styles['event-text']}>
        <h2>DevFest Santiago</h2>
        <p className={styles['event-date']}>Fecha: Noviembre 9, 2024</p>
        <p>
          Conferencia orientada a la comunidad donde se tocarán temas sobre tecnologías de Google (AI, Cloud, Mobile y Web) organizado por las comunidades GDGs.
        </p>
        <a href="https://lu.ma/gc4crls6" className={styles['register-button']}>
          Registrate
        </a>
      </div>
    </section>
  );
};

export default EventDescription;
