import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/sessionCard.module.scss';
import SessionDialog from './SessionDialog';
import Image from 'next/image';
import { Session } from '../src/types/types'; // Importar la interfaz desde types.ts

interface SessionCardProps {
  session: Session;
}

const SessionCard: FC<SessionCardProps> = ({ session }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { basePath } = useRouter(); // Obtén basePath

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
              {session.presentationType === 'talk' ? 'Charla' : session.presentationType === 'lighting' ? 'Charla Relámpago' : 'Workshop'}
            </span>
          )}
        </div>
        <div className={styles['session-content']}>
          <div className={styles['session-header']}>
            <h3 className={styles['session-title']}>{session.title}</h3>
            {session.description && <p className={styles['session-description']}>{session.description}</p>}
          </div>
          <div className={styles['session-body']}>
            <Image
              src={`${basePath}/assets/speakers/${session.photo || 'placeholder.webp'}`}
              alt={session.speaker || 'Speaker'}
              width={60}
              height={60}
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
