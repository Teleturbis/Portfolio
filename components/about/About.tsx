import styles from './About.module.scss';
import { Marker, Map } from 'pigeon-maps';
import { stamenToner } from 'pigeon-maps/providers';

export default function About() {
  return (
    <main className={`${styles.main}`}>
      <img
        className={styles.profilePicture}
        src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80'
        alt='Profile Picture'
      />
      <div className={styles.rightDiv}>
        <h2>Infos</h2>
        <p>
          Passionierter Webentwickler mit Fokus auf Frontend. Ich habe mich
          bereits in verschiedenen Projekten mit verschiedenen Technologien
          beschäftigt. Aktuell arbeite ich hauptsächlich mit VueJS und NuxtJS,
          beschäftige mich aber privat vorallem mit ReactJS und NextJS. Ich
          arbeite gerne mit agilen Methoden und bin ein Teamplayer.
        </p>
        <p>
          Aktuell arbeite ich als FrontEnd-Entwickler bei der Firma Urlaubsguru
          GmbH in Holzwickede (Full Remote). Ich arbeite dort mit Vue2/Nuxt2 und
          bin verantwortlich für die Entwicklung und Weiterentwicklung der
          Webseiten. Aktuell arbeite ich an der Umstellung der Webseiten auf
          Vue3/Nuxt3.
        </p>
        <div className={styles.location}>
          <div className={styles.description}>
            <h3>Woher ich komme?</h3>
            <p>
              Ich komme aus dem schönen Bayern, genauer aus Collenberg, was sich
              etwa 40km südlich von Aschaffenburg befindet
            </p>
          </div>
          <div className={styles.map}>
            <Map
              height={330}
              defaultCenter={[49.771974, 9.330175]}
              defaultZoom={9}
              provider={stamenToner}
              dprs={[1, 2]}
              metaWheelZoom={true}
            >
              <Marker
                width={50}
                color={'#5e5e5e'}
                anchor={[49.771974, 9.330175]}
              />
            </Map>
          </div>
        </div>
      </div>
    </main>
  );
}

// TODO: Make Responsive
