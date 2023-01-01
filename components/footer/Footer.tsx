import Link from 'next/link';
import styles from './Footer.module.scss';

import Npm from './Npm';
import LinkedIn from './LinkedIn';
import Instagram from './Instagram';
import GitHub from './GitHub';

const logo = 'android-chrome-512x512.png';

export default function Footer() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.linksDiv}>
        <Link className={styles.link} href='/'>
          Über mich
        </Link>
        <Link className={styles.link} href='/'>
          Skills
        </Link>
        <Link className={styles.link} href='/'>
          Projekte
        </Link>
        <Link className={styles.link} href='/'>
          Kontakt
        </Link>
        <Link className={styles.link} href='/'>
          Impressum
        </Link>
        <a className={styles.link} href='mailto:kevin@kevinpoppe.com'>
          Email
        </a>
      </div>

      <div className={styles.logoDiv}>
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
