import Hero from '@/components/sections/Hero';
import Header from '@/components/Header';

import AboutMe from '@/components/sections/AboutMe';
import SocialsSection from '@/components/sections/SocialsSection';
import Resume from '@/components/sections/Resume';
import Map from '@/components/sections/Map';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';

import de from '@/locales/de.json';

export default function Page() {
  return (
    <>
      <Hero lang={de['hero']} />
      <Header />

      <AboutMe lang={de['about-me']} />
      <Map lang={de['map']} />
      <Resume lang={de['resume']} />
      <SocialsSection lang={de['socials']} />
      <Projects lang={de['projects']} />
      <Footer lang={de['socials']} />
    </>
  );
}
