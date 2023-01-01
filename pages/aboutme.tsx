import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import NavigationSmall from '../components/navigation/NavigationSmall';

export async function getStaticProps(obj: { locale: string }) {
  const { locale } = obj;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'aboutMe'])),
    },
  };
}

export default function Home(props: any): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Poppe - Über mich</title>
        <meta
          name='description'
          content='Portfolio von Kevin Poppe - Webentwickler | Über mich'
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
          <NavigationSmall />
        </section>
        <section>
          <About />
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
