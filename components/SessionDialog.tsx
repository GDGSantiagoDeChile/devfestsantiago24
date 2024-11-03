import { FC } from 'react';
import styles from '../styles/sessionDialog.module.scss';
import Image from 'next/image';
import { Session } from '../src/types/types'; // Importar la interfaz desde types.ts

interface SessionDialogProps {
  session: Session;
  isOpen: boolean;
  onClose: () => void;
}

const SessionDialog: FC<SessionDialogProps> = ({ session, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles['dialog-overlay']} onClick={onClose}>
      <div className={styles['dialog-content']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['dialog-left']}>
          <h2>{session.title}</h2>
          <p>{session.description}</p>
        </div>
        <div className={styles['dialog-right']}>
          <Image
            src={`/assets/speakers/${session.photo || 'placeholder.webp'}`}
            alt={session.speaker || 'Speaker'}
            width={100}
            height={100}
            className={styles['dialog-speaker-photo']}
          />
          <p className={styles['speaker-name']}>{session.speaker}</p>
          <p className={styles['speaker-title']}>{session.speakerTitle}</p>
        </div>
        <button className={styles['close-button']} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default SessionDialog;
