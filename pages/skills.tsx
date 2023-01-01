import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Footer from '../components/footer/Footer';
import NavigationSmall from '../components/navigation/NavigationSmall';
import Skills from '../components/skills/Skills';

export default function App() {
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
          <NavigationSmall />
        </section>
        <section>
          <Skills />
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>

      <div />
    </div>
  );
}
