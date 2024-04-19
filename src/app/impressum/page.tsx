import React from 'react';

const Impressum = () => {
  return (
    <div className='px-4 py-6 sm:px-6 lg:px-8 bg-brand-gray text-brand-text'>
      <h2 className='text-2xl font-bold'>Impressum</h2>
      <p className='mt-2'>Angaben gemäß § 5 TMG</p>
      <p className='mt-1'>
        Kevin Poppe <br />
        97903 Collenberg
      </p>
      <p className='mt-2'>
        <strong>Vertreten durch:</strong>
        <br />
        Kevin Poppe
      </p>
      <p className='mt-2'>
        <strong>Kontakt:</strong>
        <br />
        E-Mail:{' '}
        <a
          href='mailto:kevin.poppe93@gmail.com'
          className='text-brand-light hover:text-brand-light-hover'
        >
          kevin.poppe93@gmail.com
        </a>
      </p>
      <p className='mt-2'>
        <strong>Haftungsausschluss:</strong>
        <br />
        <br />
        <strong>Haftung für Links</strong>
        <br />
        <br />
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <p className='mt-4'>
        Impressum vom{' '}
        <a
          href='https://www.impressum-generator.de'
          className='text-brand-light hover:text-brand-light-hover'
        >
          Impressum Generator
        </a>{' '}
        der{' '}
        <a
          href='https://www.kanzlei-hasselbach.de/'
          className='text-brand-light hover:text-brand-light-hover'
        >
          Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
        </a>
      </p>
    </div>
  );
};

export default Impressum;
