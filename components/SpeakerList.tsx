import { useState } from 'react';
import speakers from '../data/speakers';
import styles from '../styles/speakerList.module.scss';
import { Speaker } from '../src/types/types'; // Importa la interfaz Speaker

interface SpeakerDialogProps {
  speaker: Speaker;
  onClose: () => void;
}

const SpeakerDialog: React.FC<SpeakerDialogProps> = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={`/assets/speakers/${speaker.photo || 'placeholder.webp'}`}
          alt={speaker.name}
          className={styles.dialogImage}
        />
        <h3 className={styles.dialogName}>{speaker.name}</h3>
        <p className={styles.dialogCountry}>{speaker.country}</p>
        <p className={styles.dialogTitle}>{speaker.title}</p>
        <p className={styles.dialogBio}>{speaker.bio}</p>
        <div className={styles.socialLinks}>
          {speaker.socialLinks?.map((link) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.platform}>
              <img
                src={`/assets/icons/${link.platform}.svg`}
                alt={`${link.platform} icon`}
                className={styles.socialIcon}
              />
            </a>
          ))}
        </div>
        <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
      </div>
    </div>
  );
};

const SpeakerList: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const handleCardClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeDialog = () => {
    setSelectedSpeaker(null);
  };

  return (
    <section className={styles.speakerList}>
      <h2 className={styles.speakerTitle}>Nuestros speakers</h2>
      <div className={styles.speakerGrid}>
        {speakers.map((speaker) => (
          <div key={speaker.name} className={styles.speakerCard} onClick={() => handleCardClick(speaker)}>
            <img
              src={`/assets/speakers/${speaker.photo || 'placeholder.webp'}`}
              alt={speaker.name}
              className={styles.speakerImage}
            />
            <div className={styles.speakerInfo}>
              <h3 className={styles.speakerName}>{speaker.name} - {speaker.country}</h3>
              <p className={styles.speakerRole}>{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedSpeaker && <SpeakerDialog speaker={selectedSpeaker} onClose={closeDialog} />}
    </section>
  );
};

export default SpeakerList;
