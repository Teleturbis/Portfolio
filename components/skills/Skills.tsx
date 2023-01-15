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

  const isBreakpoint = useMediaQuery(1320);
  const softskills: (string | number)[][] = [
    [t('skills:softskills.learning'), 100],
    [t('skills:softskills.flexibility'), 100],
    [t('skills:softskills.reliability'), 100],
    [t('skills:softskills.responsibility'), 100],
    [t('skills:softskills.teamwork'), 90],
    [t('skills:softskills.communication'), 90],
    [t('skills:softskills.empathy'), 90],
    [t('skills:softskills.creativity'), 80],
    [t('skills:softskills.self-employed'), 80],
    [t('skills:softskills.problem-solving'), 80],
    [t('skills:softskills.organization'), 75],
    [t('skills:softskills.analytical'), 75],
  ];

  return (
    <main className={`${styles.main}`}>
      <div className={styles.seperatorLeft}>
        <h2>{t('skills:techskills.title')}</h2>
        <div className={styles.skillsDiv}>
          {POSITIONS.map(([icon, v1, t1, v2, t2], index) => (
            <motion.div
              key={`${index + Math.floor(Math.random() * 999)}${new Date()}`}
              initial={{ opacity: 1 }}
              animate={{
                [v1]: isBreakpoint ? t1 / 2 : t1,
                [v2]: isBreakpoint ? t2 / 2 : t2,
                opacity: 1,
                scale: 1,
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
            src='/images/techSkills.webp'
            alt='head'
            animate={{ scale: 1.2, opacity: 1 }}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.seperatorRight}>
        <h2>{t('skills:softskills.title')}</h2>
        <div className={styles.softskillsDiv}>
          {softskills.map(([title, x], index) => (
            <div
              key={`${index}${new Date()}`}
              className={styles.softskillsOutterbar}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${x}%` }}
                transition={{
                  delay: 0.2 * (index / 1.25),
                  duration: 0,
                  type: 'spring',
                  damping: 12,
                }}
                className={styles.softskillBar}
                style={{ width: x.toString() + '%' }}
              >
                {title}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
