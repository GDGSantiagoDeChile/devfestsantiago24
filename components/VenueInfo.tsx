import { useRouter } from 'next/router';
import Image from 'next/image';
import location from '../data/location';
import styles from '../styles/venueInfo.module.scss';

const VenueInfo = () => {
  const { basePath } = useRouter(); // Obtén basePath

  return (
    <section className={styles.venueSection}>
      <h2 className={styles.venueTitle}>Ubicación del evento</h2>

      <div className={styles.venueRow}>
        <Image
          src={`${basePath}/assets/${location.placeImage}`}
          alt="Foto del lugar del evento"
          width={400}
          height={300}
          className={styles.placeImage}
        />
        <p className={styles.address}>{location.address}</p>
      </div>

      <div className={styles.venueRow}>
        <p className={styles.directions}>{location.directions}</p>
        <a href={location.googleMapsLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={`${basePath}/assets/${location.mapImage}`}
            alt="Mapa de la ubicación"
            width={400}
            height={300}
            className={styles.mapImage}
          />
        </a>
      </div>
    </section>
  );
};

export default VenueInfo;
