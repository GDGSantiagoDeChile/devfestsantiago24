import Header from '../components/Header';
import SpeakerList from '../components/SpeakerList';
import Footer from '../components/Footer';

import headerStyles from '../styles/header.module.scss';
import footerStyles from '../styles/footer.module.scss';
import speakerListStyles from '../styles/speakerList.module.scss';

const SpeakersPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={speakerListStyles.speakers}>
          <SpeakerList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SpeakersPage;
