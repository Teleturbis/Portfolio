export type HeroType = {
  'contact-cta': string;
  title: string[];
  slogan: string;
};

export type AboutMeType = {
  title: string;
  description: string[];
  stats: {
    code: string;
    energy: string;
  };
};

export type SocialsType = {
  title: string;
  icons: {
    icon: string;
    alt: string;
    url: string;
  }[];
};

export type ResumeType = {
  title: string;
  work: {
    company: string;
    position: string;
    date: string;
    icon: string;
    description: string[];
  }[];
  education: {
    company: string;
    position: string;
    date: string;
    icon: string;
    description: string[];
  }[];
};

export type MapType = {
  title: string;
  subTitle: string;
};

export type ProjectsType = {
  title: string;
  projects: {
    title: string;
    type: string;
    description: string[];
    images?: { src: string; alt: string }[];
  }[];
};
