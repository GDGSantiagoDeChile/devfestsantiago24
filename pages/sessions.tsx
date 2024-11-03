import Header from '../components/Header';
import Footer from '../components/Footer';
import sessions from '../data/sessions';
import SessionCard from '../components/SessionCard';

import headerStyles from '../styles/header.module.scss';
import footerStyles from '../styles/footer.module.scss';
import sessionCardStyles from '../styles/sessionCard.module.scss';

const SessionsPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={sessionCardStyles['sessions-title']}>Sessions</h1>
        {sessions.map((session) => (
          <div key={session.title} className={sessionCardStyles['session-card']}>
            <SessionCard session={session} />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default SessionsPage;
