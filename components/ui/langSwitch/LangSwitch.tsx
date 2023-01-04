import { useEffect, useState, useCallback } from 'react';
import styles from './LangSwitch.module.scss';
import { useTranslation } from 'next-i18next';

const usa = '/images/usa.png';
const de = '/images/germany.png';

interface Props {
  locale: string;
}

export default function LangSwitch(props: Props): JSX.Element {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(props.locale ? props.locale : 'de');

  useEffect(() => {
    if (props.locale) setChecked(props.locale);
  }, [props.locale]);

  function changeHandler(locale: string) {
    const origin = document.location.origin;

    let path: string[] = document.location.pathname
      .split('/')
      .filter((p) => p !== '');
    path = path[0] == 'de' || path[0] == 'en' ? path.slice(1, 1) : path;

    const newPath = path.join('/');

    document.location.href = `${origin}/${
      locale == 'de' ? '' : locale + '/'
    }${newPath}`;
  }

  return (
    <div className={styles.radioGroup}>
      <input
        className={styles.input}
        type='radio'
        id='option-one'
        name='selector'
        onChange={() => {
          changeHandler('de');
        }}
        checked={checked === 'de'}
      />
      <label className={styles.label} htmlFor='option-one'>
        DE
      </label>
      <input
        className={styles.input}
        type='radio'
        id='option-two'
        name='selector'
        onChange={() => {
          changeHandler('en');
        }}
        checked={checked === 'en'}
      />
      <label className={styles.label} htmlFor='option-two'>
        EN
      </label>
    </div>
  );
}
