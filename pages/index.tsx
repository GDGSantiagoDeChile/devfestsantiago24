import Header from '../components/Header';
import AnimatedImagePlaceholder from '../components/AnimatedImagePlaceholder';
import EventDescription from '../components/EventDescription';
import SpeakerList from '../components/SpeakerList';
import VenueInfo from '../components/VenueInfo';
import Footer from '../components/Footer';

import headerStyles from '../styles/header.module.scss';
import footerStyles from '../styles/footer.module.scss';
import eventContainerStyles from '../styles/eventContainer.module.scss';
import placeholderStyles from '../styles/animatedImagePlaceholder.module.scss';
import eventDescriptionStyles from '../styles/eventDescription.module.scss';
import speakerListStyles from '../styles/speakerList.module.scss';
import venueInfoStyles from '../styles/venueInfo.module.scss';

const Home = () => {
  return (
    <>
      <Header />
      <main>
      <section className={eventContainerStyles['event-container']}>
          <div className={placeholderStyles['animated-placeholder']}>
            <AnimatedImagePlaceholder />
          </div>
          <div className={eventDescriptionStyles['event-description']}>
            <EventDescription />
          </div>
        </section>
        <div className={speakerListStyles.speakers}>
          <SpeakerList />
        </div>
        <div className={venueInfoStyles['venue-info']}>
          <VenueInfo />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
