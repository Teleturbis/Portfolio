import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import { useEffect, useState, useCallback } from 'react';

import styles from './Hero.module.scss';

interface Props {
  headline: string;
  subHeadline: string;
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

export default function Hero(props: Props): JSX.Element {
  const { t } = useTranslation();
  const isBreakpoint = useMediaQuery(768);

  let hero = isBreakpoint
    ? 'https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    : 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

  return (
    <Parallax
      bgImage={hero}
      bgClassName={styles.heroBackground}
      strength={500}
      blur={{ min: -15, max: 15 }}
      className={styles.hero}
    >
      <h1 className={`${styles.headline}`}>{props.headline}</h1>
      <h2 className={`${styles.subHeadline}`}>{props.subHeadline}</h2>
    </Parallax>
  );
}
