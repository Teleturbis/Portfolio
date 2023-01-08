import styles from './Projects.module.scss';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Params {
  createDate: string;
  description: string;
  link: string;
  publishDate: string;
  screenshot: string;
  shortDescription: string;
  title: string;
  tags: Tags[];
  allTags: AllTags[];
}

interface AllTags {
  name: string;
  id: string;
}

interface Tags {
  sys: {
    id: string;
    type: string;
    linkType: string;
  };
}

export default function About(params: Params) {
  const { t } = useTranslation();
  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    let temp: any = [];
    params.tags.forEach((el: any) => {
      params.allTags.forEach((el2: any) => {
        if (el.sys.id === el2.tagId) {
          temp.push(el2);
        }
      });
    });

    setFilteredTags(temp);
  }, [params.allTags, params.tags]);

  return (
    <Link href={params.link} target='_blank' className={styles.projectCard}>
      <img className={styles.cardImage} src={params.screenshot} alt='' />
      <div className={styles.cardDiv}>
        <h2 className={styles.cardTitle}>{params.title}</h2>
        <p className={styles.cardDescription}>{params.shortDescription}</p>
        <div className={styles.cardTagsDiv}>
          {filteredTags &&
            filteredTags.map((el: any, index: number) => (
              <button className={styles.cardTags} key={index}>
                {el.name}
              </button>
            ))}
        </div>
      </div>
    </Link>
  );
}
