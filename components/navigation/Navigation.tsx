import Link from 'next/link';
import styles from './Navigation.module.scss';
import { Parallax } from 'react-parallax';
import { Map, Marker } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';
import { useTranslation } from 'next-i18next';

import LangSwitch from '../ui/langSwitch/LangSwitch';

interface Props {
  locale: string;
}

export default function Navigation(props: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <main className={`${styles.main}`}>
      <Parallax
        bgClassName={styles.profilePicture}
        bgImage='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80'
        bgImageAlt='Profile Picture'
        style={{
          overflow: 'unset',
          position: 'absolute',
          width: '30rem',
          top: '-1rem',
          left: '-1rem',
        }}
        strength={250}
        blur={{ min: 15, max: -15 }}
      />
      <div className={styles.rightDiv}>
        <div className={styles.navLinks}>
          <Link className={styles.link} href='/aboutme'>
            {t('aboutme')}
          </Link>
          <Link className={styles.link} href='/skills'>
            {t('skills')}
          </Link>
          <Link className={styles.link} href='/'>
            {t('projects')}
          </Link>
          <Link className={styles.link} href='/'>
            {t('contact')}
          </Link>
          <LangSwitch locale={props.locale} />
        </div>
        <div className={styles.map}>
          <Map
            height={750}
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
    </main>
  );
}
