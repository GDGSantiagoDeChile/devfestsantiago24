import location from '../data/location';
import styles from '../styles/venueInfo.module.scss';

const VenueInfo = () => {
  return (
    <section className={styles.venueSection}>
      <h2 className={styles.venueTitle}>Ubicación del evento</h2>

      <div className={styles.venueRow}>
        <img src={location.placeImage} alt="Foto del lugar del evento" className={styles.placeImage} />
        <p className={styles.address}>{location.address}</p>
      </div>

      <div className={styles.venueRow}>
        <p className={styles.directions}>{location.directions}</p>
        <a href={location.googleMapsLink} target="_blank" rel="noopener noreferrer">
          <img src={location.mapImage} alt="Mapa de la ubicación" className={styles.mapImage} />
        </a>
      </div>
    </section>
  );
};

export default VenueInfo;
