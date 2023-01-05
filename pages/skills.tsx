import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useCallback, useState } from 'react';

import NavigationSmall from '../components/navigation/NavigationSmall';
import MiniNavigation from '../components/navigation/MiniNavigation';
import Skills from '../components/skills/Skills';

export async function getStaticProps(obj: { locale: string }) {
  const { locale } = obj;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'skills'])),
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

export default function App(props: any): JSX.Element {
  const { t } = useTranslation();
  const isBreakpoint = useMediaQuery(768);

  useEffect(() => {
    if (document) {
      document.addEventListener('visibilitychange', (event) => {
        if (document.visibilityState == 'visible') {
          document.title = 'Kevin Poppe - Skills';
        } else {
          document.title = 'Ich vermisse dich 🥺';
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Poppe - Skills</title>
        <meta
          name='description'
          content='Portfolio von Kevin Poppe - Webentwickler | Meine Skills'
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
          {isBreakpoint ? (
            <MiniNavigation locale={props.locale} />
          ) : (
            <NavigationSmall locale={props.locale} />
          )}
        </section>
        <section>
          <Skills />
        </section>
      </main>

      <div />
    </div>
  );
}
