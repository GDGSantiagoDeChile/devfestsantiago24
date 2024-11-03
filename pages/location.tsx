import Header from '../components/Header';
import VenueInfo from '../components/VenueInfo';
import Footer from '../components/Footer';

import headerStyles from '../styles/header.module.scss';
import footerStyles from '../styles/footer.module.scss';
import venueInfoStyles from '../styles/venueInfo.module.scss';

const LocationPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={venueInfoStyles['venue-info']}>
          <VenueInfo />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LocationPage;
