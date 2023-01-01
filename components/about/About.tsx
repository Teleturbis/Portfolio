import styles from './About.module.scss';
import { Marker, Map } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();

  return (
    <main className={`${styles.main}`}>
      <div className={styles.profilePicture}>
        <Image fill src='/images/dog.webp' alt='Profile Picture' />
      </div>
      <div className={styles.rightDiv}>
        <h2>{t('aboutMe:info')}</h2>
        <p>{t('aboutMe:descriptionFirst')}</p>
        <p>{t('aboutMe:descriptionSecond')}</p>
        <div className={styles.location}>
          <div className={styles.description}>
            <h3>{t('aboutMe:locationHeader')}</h3>
            <p>{t('aboutMe:locationText')}</p>
          </div>
          <div className={styles.map}>
            <Map
              height={330}
              defaultCenter={[49.771974, 9.330175]}
              defaultZoom={9}
              provider={stamenToner}
              dprs={[1, 2]}
              metaWheelZoom={true}
            >
              <Marker
                width={50}
                color={'#5e5e5e'}
                anchor={[49.771974, 9.330175]}
              />
            </Map>
          </div>
        </div>
      </div>
    </main>
  );
}

// TODO: Make Responsive
