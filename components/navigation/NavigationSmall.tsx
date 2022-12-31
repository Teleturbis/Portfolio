import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <main className={`${styles.mainSmall}`}>
      <img src='android-chrome-512x512.png' alt='Initials' />
      <div className={styles.navLinks}>
        <Link className={styles.link} href='/'>
          Start
        </Link>
        <Link className={styles.link} href='/aboutme'>
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
      </div>
    </main>
  );
}
