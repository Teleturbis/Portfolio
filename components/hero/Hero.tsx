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
    ? '/images/heroMobile.webp'
    : '/images/heroDesktop.webp';

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
