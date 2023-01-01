import Link from 'next/link';
import styles from './Navigation.module.scss';
import { useTranslation } from 'next-i18next';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <main className={`${styles.mainSmall}`}>
      <img src='android-chrome-512x512.png' alt='Initials' />
      <div className={styles.navLinks}>
        <Link className={styles.link} href='/'>
          {t('start')}
        </Link>
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
      </div>
    </main>
  );
}
