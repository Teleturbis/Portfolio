import styles from './Projects.module.scss';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      if (selectedTags.length > 0) {
        const temp: any = [];

        projects.forEach((el: any) => {
          selectedTags.forEach((el2: any) => {
            el.tags.filter((el3: any) => el3.sys.id === el2.tagId).length > 0 &&
              temp.filter((el4: any) => {
                return el4 == el;
              }).length < 1 &&
              temp.push(el);
          });
        });

        setFilteredProjects(temp);
      } else {
        setFilteredProjects(projects);
      }
    }
  }, [projects, selectedTags]);

  async function fetchData() {
    await axios({
      method: 'post',
      url: 'https://portfolio-be-production-0fb4.up.railway.app/projects',
      data: {
        apiKey: 'QneE%afc<$-§yEVu}Z6>y<§aMs+SjJaSYnzrxQhgMeT',
      },
    })
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios({
      method: 'post',
      url: 'https://portfolio-be-production-0fb4.up.railway.app/projects/tags',
      data: {
        apiKey: 'QneE%afc<$-§yEVu}Z6>y<§aMs+SjJaSYnzrxQhgMeT',
      },
    })
      .then((response) => {
        setTags(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleTagSelect(tag: any) {
    if (!selectedTags.includes(tag)) {
      const temp = [...selectedTags, tag];
      setSelectedTags(temp);
    } else {
      setSelectedTags([...selectedTags.filter((el) => el.tagId !== tag.tagId)]);
    }
  }

  return (
    <main className={`${styles.main}`}>
      <h2>Projekte</h2>
      <p>Nach Technologien filtern:</p>
      <div className={styles.tagsDiv}>
        {tags.length > 0 &&
          tags.map((tag: any, index: number) => (
            <button
              className={
                selectedTags.includes(tag)
                  ? styles.buttonSelected
                  : styles.buttonUnselected
              }
              key={index}
              onClick={() => handleTagSelect(tag)}
            >
              {tag.name}
            </button>
          ))}
        {tags.length === 0 && <div className={styles.tagSkeleton}></div>}
      </div>
      <div className={styles.projectCardsDiv}>
        {filteredProjects.length > 0 &&
          filteredProjects.map((el: any, index: number) => (
            <ProjectCard
              key={index}
              createDate={el.fields.createDate}
              description={el.fields.description}
              link={el.fields.link}
              publishDate={el.fields.publishDate}
              screenshot={el.fields.screenshot?.fields.file.url}
              shortDescription={el.fields.shortDescription}
              title={el.fields.title}
              tags={el.tags}
              allTags={tags}
            />
          ))}
        {filteredProjects.length === 0 &&
          [1, 2, 3, 4, 5].map((key, index) => (
            <div key={index} className={styles.projectCardSkeleton}>
              <div className={styles.cardImage} />
              <div className={styles.cardDiv}>
                <div className={styles.cardTitle}></div>
                <div className={styles.cardDescription}></div>
                <div className={styles.cardTag}></div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
