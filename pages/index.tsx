import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useCallback, useState } from 'react';

import Hero from '../components/hero/Hero';
import Navigation from '../components/navigation/Navigation';
import MiniNavigation from '../components/navigation/MiniNavigation';
import Footer from '../components/footer/Footer';

export async function getStaticProps(obj: { locale: string }) {
  const { locale } = obj;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'aboutMe'])),
    },
  };
}

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Home(props: any): JSX.Element {
  const { t } = useTranslation();
  const isBreakpoint = useMediaQuery(768);
  const [modal, setModal] = useState(true);

  function handleClose() {
    setModal(false);
  }

  useEffect(() => {
    if (document) {
      document.addEventListener('visibilitychange', (event) => {
        if (document.visibilityState == 'visible') {
          document.title = 'Kevin Poppe - Webentwickler';
        } else {
          document.title = 'Ich vermisse dich 🥺';
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Poppe - Webentwickler</title>
        <meta
          name='description'
          content='Portfolio von Kevin Poppe - Webentwickler'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className={styles.mainDiv}>
        <section>
          <Hero headline={t('headline')} subHeadline={t('subHeadline')} />
        </section>
        <section>
          {isBreakpoint ? (
            <MiniNavigation locale={props.locale} />
          ) : (
            <Navigation locale={props.locale} />
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>

      {/* Modal */}
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Hey!</h2>
            <p>
              Diese Seite befindet sich noch im Aufbau. Gerne kannst du sie dir
              aber schon im aktuellen Zustand anschauen.
            </p>
            <p>
              This page is still under construction. You can already take a look
              at it in its current state.
            </p>
            <div>
              <p>Beste Grüße | Best regards</p>
              <p>Kevin</p>
            </div>

            <button className={styles.closeModal} onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
