import Link from 'next/link';
import styles from './Footer.module.scss';
import { useTranslation } from 'next-i18next';

import Npm from './Npm';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import GitHub from './GitHub';

const logo = '/android-chrome-512x512.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <main className={`${styles.main}`}>
      <div className={styles.linksDiv}>
        <Link className={styles.link} href='/aboutme'>
          {t('aboutme')}
        </Link>
        <Link className={styles.link} href='/skills'>
          {t('skills')}
        </Link>
        <Link className={styles.link} href='/projects'>
          {t('projects')}
        </Link>
        <Link className={styles.link} href='/contact'>
          {t('contact')}
        </Link>
        <Link className={styles.link} href='/disclaimer'>
          {t('impressum')}
        </Link>
        <a className={styles.link} href='mailto:kevin@kevinpoppe.com'>
          {t('mail')}
        </a>
      </div>

      <div className={styles.logoDiv}>
        <div className={styles.logoSubscribeForm}>
          <div className={styles.subscribeDiv}>
            <input
              className={styles.subscribeInput}
              type='text'
              placeholder='E-Mail Adresse'
            />
            <button className={styles.subscribeButton}>Anmelden</button>
          </div>
          <p>
            Melde dich zu meinem Newsletter an, um keine Neuen Projekte zu
            verpassen!
          </p>
        </div>
        <img src={logo} alt='Initials' />
      </div>

      <div className={styles.socialmediaDiv}>
        <ul className={styles.socialmediaList}>
          <li className={styles.listItem}>
            <a href='https://www.linkedin.com/in/poppe-kevin/'>
              <LinkedIn />
              LinkedIn
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='https://www.instagram.com/teleturbis/'>
              <Instagram />
              Instagram
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='https://github.com/Teleturbis'>
              <GitHub />
              GitHub
            </a>
          </li>
          <li className={styles.listItem}>
            <a href='https://www.npmjs.com/~teleturbis'>
              <Npm />
              npmJS
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
