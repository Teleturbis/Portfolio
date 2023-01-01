import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Footer from '../components/footer/Footer';
import NavigationSmall from '../components/navigation/NavigationSmall';
import Skills from '../components/skills/Skills';
import { useEffect } from 'react';

export async function getStaticProps(obj: { locale: string }) {
  const { locale } = obj;
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'skills'])),
    },
  };
}

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    if (document) {
      document.addEventListener('visibilitychange', (event) => {
        if (document.visibilityState == 'visible') {
          document.title = 'Kevin Poppe - Impressum';
        } else {
          document.title = 'Ich vermisse dich 🥺';
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Poppe - Impressum</title>
        <meta
          name='description'
          content='Portfolio von Kevin Poppe - Webentwickler | Impressum'
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
        <section className={`${styles.impressum}`}>
          <div>
            <h2>Impressum</h2>
            <br />
            <br />
            <p>Angaben gemäß § 5 TMG</p>
            <p>
              Kevin Poppe <br />
              Hainbuchstr. 41
              <br />
              97903 Collenberg <br />
            </p>
            <p>
              <strong>Vertreten durch: </strong>
              <br />
              Kevin Poppe
              <br />
            </p>
            <p>
              <strong>Kontakt:</strong> <br />
              Telefon: 0160-91118502
              <br />
              E-Mail: <a href='mailto:Me@KevinPoppe.com'>Me@KevinPoppe.com</a>
              <br />
            </p>
            <br />
            <br />
            <p>
              <h3>
                <strong>Haftungsausschluss:</strong>
              </h3>
              <br />
              <br />
              <strong>Haftung für Links</strong>
              <br />
              <br />
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              <br />
              <br />
              <strong>Urheberrecht</strong>
              <br />
              <br />
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
              <br />
              <br />
              <strong>Datenschutz</strong>
              <br />
              <br />
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich. <br />
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              <br />
              <br />
              <br />
              <strong>Google Analytics</strong>
              <br />
              <br />
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (''Google''). Google Analytics verwendet sog.
              ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
              einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
              um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen zu erbringen. Auch wird Google diese
              Informationen gegebenenfalls an Dritte übertragen, sofern dies
              gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
              Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
              IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website voll umfänglich nutzen können.
              Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </p>
            <br />
            Website Impressum von{' '}
            <a href='https://www.impressum-generator.de' target='_blank'>
              impressum-generator.de
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>

      <div />
    </div>
  );
}
