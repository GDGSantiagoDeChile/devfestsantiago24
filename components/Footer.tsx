import footerData from '../data/footer';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h3>{footerData.about.title}</h3>
        <p>{footerData.about.description}</p>
      </div>

      <div className={styles.footerColumn}>
        <h3>Recursos</h3>
        <ul>
          {footerData.resources.map((resource) => (
            <li key={resource.name}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h3>Contacto</h3>
        <p>
          <a href={`mailto:${footerData.contact.email}`} className={styles.emailLink}>
            {footerData.contact.email}
          </a>
        </p>
        <div className={styles.socialLinks}>
          {footerData.contact.socialLinks.map((link) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.icon}>
              <img src={`/assets/icons/${link.icon}.svg`} alt={`${link.icon} icon`} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.footerColumn}>
        <h3>DevFest Santiago</h3>
        <ul>
          {footerData.devFest.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <p>{footerData.copyright.text}</p>
        <p>{footerData.copyright.disclaimer}</p>
      </div>
    </footer>
  );
};

export default Footer;
