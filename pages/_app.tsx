import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';

import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.scss';

function App({ Component, pageProps }: AppProps) {
  const [modal, setModal] = useState(true);

  function handleClose() {
    setModal(false);
  }

  return (
    <>
      <Component {...pageProps} />
      <Footer />

      {/* Modal Page under Construction */}
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

      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
