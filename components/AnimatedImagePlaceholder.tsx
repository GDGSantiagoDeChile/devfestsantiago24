import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/animatedImagePlaceholder.module.scss';

const AnimatedImagePlaceholder = () => {
  const { basePath } = useRouter(); // Obtén basePath

  return (
    <div className={styles['animated-placeholder']}>
      <Image
        src={`${basePath}/assets/images/2024_Save_the_date.gif`} // Usa basePath para la ruta de la imagen
        alt="Save the Date 2024"
        width={500} // Ajusta el ancho según sea necesario
        height={500} // Ajusta la altura según sea necesario
        className={styles['animated-image']}
      />
    </div>
  );
};

export default AnimatedImagePlaceholder;
