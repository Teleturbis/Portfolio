import styles from './Error.module.scss';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Error() {
  const { t } = useTranslation();

  return (
    <main className={`${styles.main}`}>
      <img src='/images/404.png' alt='initials' className={styles.logo} />
      <div className={styles.errorDiv}>
        <div className={styles.error}>
          <pre>
            <code>
              <p>{'function checkAvaibility( site ){'}</p>
              <p>{'  if (site == undefined || site == null ) {'}</p>
              <p>{`    return {`}</p>
              <p>
                {'      status: '}
                <span>404</span>,
              </p>
              <p>
                {'      message: "'}
                <span>{t('error:error')}</span>
                {'"'}
              </p>
              <p>{'    };'}</p>
              <p>{'  };'}</p>
              <p>{'};'}</p>
            </code>
          </pre>
        </div>
        <Link className={styles.link} href='/'>
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
