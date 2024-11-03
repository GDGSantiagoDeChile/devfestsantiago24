import styles from '../styles/animatedImagePlaceholder.module.scss';

const AnimatedImagePlaceholder = () => {
  return (
    <div className={styles['animated-placeholder']}>
      <img src="/assets/images/2024_Save_the_date.gif" alt="Save the Date 2024" className={styles['animated-image']} />
    </div>
  );
};

export default AnimatedImagePlaceholder;
