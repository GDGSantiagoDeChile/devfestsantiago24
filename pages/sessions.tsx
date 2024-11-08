import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sessions from '../data/sessions';
import workshops from '../data/workshops';
import SessionCard from '../components/SessionCard';

import sessionCardStyles from '../styles/sessionCard.module.scss';

const SessionsPage = () => {
  const [activeTab, setActiveTab] = useState('charlas');

  useEffect(() => {
    // Get initial tab from URL hash or default to 'charlas'
    const hash = window.location.hash.replace('#', '');
    if (hash === 'talleres' || hash === 'charlas') {
      setActiveTab(hash);
    }

    // Update hash when tab changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash === 'talleres' || newHash === 'charlas') {
        setActiveTab(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <>
      <Header />
      <main>
        <h1 className={sessionCardStyles['sessions-title']}>Agenda</h1>
        
        <div className={sessionCardStyles['tabs-container']}>
          <button 
            className={`${sessionCardStyles['tab']} ${activeTab === 'charlas' ? sessionCardStyles['active'] : ''}`}
            onClick={() => handleTabClick('charlas')}
          >
            Charlas
          </button>
          <button 
            className={`${sessionCardStyles['tab']} ${activeTab === 'talleres' ? sessionCardStyles['active'] : ''}`}
            onClick={() => handleTabClick('talleres')}
          >
            Talleres
          </button>
        </div>

        <div className={sessionCardStyles['sessions-container']}>
          {activeTab === 'charlas' ? (
            sessions.map((session) => (
              <div key={session.title} className={sessionCardStyles['session-card']}>
                <SessionCard session={session} />
              </div>
            ))
          ) : (
            workshops.map((workshop) => (
              <div key={workshop.title} className={sessionCardStyles['session-card']}>
                <SessionCard session={workshop} />
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SessionsPage;
