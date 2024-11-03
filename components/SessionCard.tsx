import { useState } from 'react';
import styles from '../styles/sessionCard.module.scss';
import SessionDialog from './SessionDialog';

const SessionCard = ({ session }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCardClick = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className={styles['session-card']} onClick={handleCardClick}>
        <div className={styles['session-time-info']}>
          <p className={styles['session-time']}>{session.start}</p>
          {session.duration && <p className={styles['session-duration']}>{session.duration}</p>}
          {session.presentationType && (
            <span className={`${styles['session-chip']} ${styles[session.presentationType]}`}>
              {session.presentationType === 'talk' ? 'Charla' : 'Charla Relámpago'}
            </span>
          )}
        </div>
        <div className={styles['session-content']}>
          <div className={styles['session-header']}>
            <h3 className={styles['session-title']}>{session.title}</h3>
            {session.description && <p className={styles['session-description']}>{session.description}</p>}
          </div>
          <div className={styles['session-body']}>
            <img
              src={`/assets/speakers/${session.photo || 'placeholder.webp'}`}
              alt={session.speaker}
              className={styles['speaker-photo']}
            />
            <div className={styles['speaker-info']}>
              <p className={styles['speaker-name']}>{session.speaker}</p>
              <p className={styles['speaker-title']}>{session.speakerTitle}</p>
            </div>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <SessionDialog
          session={session}
          isOpen={isDialogOpen}
          onClose={closeDialog}
        />
      )}
    </>
  );
};

export default SessionCard;
