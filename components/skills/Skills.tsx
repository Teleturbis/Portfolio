import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.scss';
import { useTranslation } from 'next-i18next';

import {
  siReact,
  siJavascript,
  siNuxtdotjs,
  siNextdotjs,
  siGit,
  siHtml5,
  siPostcss,
  siVuedotjs,
  siTypescript,
  siCss3,
  siApollographql,
  siNodedotjs,
} from 'simple-icons';

const POSITIONS: (string | number | any)[][] = [
  [siJavascript, 'x', 0, 'y', 250],
  [siTypescript, 'x', 125, 'y', 216.51],
  [siNodedotjs, 'x', 216.51, 'y', 125],
  [siNuxtdotjs, 'x', 250, 'y', 0],
  [siVuedotjs, 'x', 216.51, 'y', -125],
  [siReact, 'x', 125, 'y', -216.51],
  [siNextdotjs, 'x', 0, 'y', -250],
  [siApollographql, 'x', -125, 'y', -216.51],
  [siPostcss, 'x', -216.51, 'y', -125],
  [siCss3, 'x', -250, 'y', 0],
  [siHtml5, 'x', -216.51, 'y', 125],
  [siGit, 'x', -125, 'y', 216.51],
];

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

export default function About() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const isBreakpoint = useMediaQuery(768);

  return (
    <main className={`${styles.main}`}>
      <h2>Meine wichtigsten Tech-Skills</h2>
      <motion.div
        className={styles.skillsDiv}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          delay: 0,
          duration: 0.5,
          type: 'spring',
        }}
        onClick={() => setIsOpen((_open) => !_open)}
      >
        {POSITIONS.map(([icon, v1, t1, v2, t2], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 1 }}
            animate={{
              [v1]: isOpen ? 0 : isBreakpoint ? t1 / 2 : t1,
              [v2]: isOpen ? 0 : isBreakpoint ? t2 / 2 : t2,
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0 : 1,
            }}
            transition={{
              delay: 0.08 * index,
              duration: 0,
              type: 'spring',
              damping: 12,
            }}
            className={styles.icon}
            dangerouslySetInnerHTML={{
              __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}" `),
            }}
          />
        ))}
        <motion.img
          src='/android-chrome-512x512.png'
          alt='head'
          animate={{ scale: !isOpen ? 1.2 : 1, opacity: !isOpen ? 1 : 0.5 }}
          whileHover={{ scale: 1.1, opacity: 0.8 }}
          transition={{
            delay: 0.25,
            duration: 1,
            type: 'spring',
          }}
          className={styles.img}
        />
      </motion.div>
    </main>
  );
}
