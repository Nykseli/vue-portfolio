import { VuetifyLocale } from "vuetify/types/services/lang";

//TODO: Should these be in order of relevance?
// Icon names can be found in https://devicon.dev/
export const technologies = [
  {
    name: "Android",
    icon: "devicon-android-plain",
  },
  {
    name: "Babel",
    icon: "devicon-babel-plain",
  },
  {
    name: "Bash",
    icon: "devicon-bash-plain",
  },
  {
    name: "C",
    icon: "devicon-c-plain",
  },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain",
  },
  {
    name: "Css",
    icon: "devicon-css3-plain",
  },
  {
    name: "Django",
    icon: "devicon-django-plain",
  },
  {
    name: "Firebase",
    icon: "devicon-firebase-plain",
  },
  {
    name: "Flutter",
    icon: "devicon-flutter-plain",
  },
  {
    name: "Gcc",
    icon: "devicon-gcc-plain",
  },
  {
    name: "Git",
    icon: "devicon-git-plain",
  },
  {
    name: "Go",
    icon: "devicon-go-plain",
  },
  {
    name: "Godot",
    icon: "devicon-godot-plain",
  },
  {
    name: "Google Cloud",
    icon: "devicon-googlecloud-plain",
  },
  {
    name: "GrahpQL",
    icon: "devicon-graphql-plain",
  },
  {
    name: "Haskell",
    icon: "devicon-haskell-plain",
  },
  {
    name: "Html",
    icon: "devicon-html5-plain",
  },
  {
    name: "Java",
    icon: "devicon-java-plain",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
  },
  {
    name: "Jest",
    icon: "devicon-jest-plain",
  },
  {
    name: "Kotlin",
    icon: "devicon-kotlin-plain",
  },
  {
    name: "Laravel",
    icon: "devicon-laravel-plain",
  },
  {
    name: "Linux",
    icon: "devicon-linux-plain",
  },
  {
    name: "Material UI",
    icon: "devicon-materialui-plain",
  },
  {
    name: "Mysql",
    icon: "devicon-mysql-plain",
  },
  {
    name: "Node JS",
    icon: "devicon-nodejs-plain",
  },
  {
    name: "Npm",
    icon: "devicon-npm-original-wordmark",
  },
  {
    name: "Php",
    icon: "devicon-php-plain",
  },
  {
    name: "Python",
    icon: "devicon-python-plain",
  },
  {
    name: "ReactJs",
    icon: "devicon-react-plain",
  },
  {
    name: "Redux",
    icon: "devicon-redux-original",
  },
  {
    name: "Ruby",
    icon: "devicon-ruby-plain",
  },
  {
    name: "Ruby on Rails",
    icon: "devicon-rails-plain",
  },
  {
    name: "Rust",
    icon: "devicon-rust-plain",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
  },
  {
    name: "VueJs",
    icon: "devicon-vuejs-plain",
  },
  {
    name: "Yarn",
    icon: "devicon-yarn-plain",
  },
];

/**
 * Translations for views/Home.vue
 */
interface HomeLocale extends VuetifyLocale {
  typerInfo1: string;
  typerInfo2: string;
  typerInfo3: string;
  description1: string;
  description2: string;
  description3: string;
  descriptionGreeting: string;
}

/**
 * Translations for skills page
 */
interface SkillsLocale extends VuetifyLocale {
  description: string;
}

/**
 * Translations for hobbies page
 */
interface HobbiesLocale extends VuetifyLocale {
  description1: string;
  description2: string;
}

/**
 * Translations for project page
 */
export interface ProjectLocaleItem extends VuetifyLocale {
  link: string;
  link2: string;
  link3: string;
  image: string;
  title: string;
  technology: string;
  description: string;
}

interface ProjectLocale extends VuetifyLocale {
  technology: string;
  item1: ProjectLocaleItem;
  item2: ProjectLocaleItem;
  item3: ProjectLocaleItem;
  item4: ProjectLocaleItem;
  item5: ProjectLocaleItem;
}

interface ExperienceLocaleItem extends VuetifyLocale {
  title: string;
  company: string;
  duration: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
}

interface ExperienceLocale extends VuetifyLocale {
  title: string;
  item1: ExperienceLocaleItem;
  item2: ExperienceLocaleItem;
  item3: ExperienceLocaleItem;
  item4: ExperienceLocaleItem;
}

interface ContactLocale extends VuetifyLocale {
  title: string;
}

export interface TalksLocaleItem extends VuetifyLocale {
  title: string;
  description: string;
  link: string;
  link_description: string;
  image: string;
}

interface TalksLocale extends VuetifyLocale {
  title: string;
  introduction: string;
  talk1: TalksLocaleItem;
}

/**
 * Translations for navigation panel
 */
interface NavigationLocale extends VuetifyLocale {
  talks: string;
  skills: string;
  contact: string;
  hobbies: string;
  projects: string;
  frontPage: string;
  experience: string;
}

export interface Locale extends VuetifyLocale {
  home: HomeLocale;
  talks: TalksLocale;
  skills: SkillsLocale;
  contact: ContactLocale;
  hobbies: HobbiesLocale;
  projects: ProjectLocale;
  experience: ExperienceLocale;
  navigation: NavigationLocale;
}

/**
 * Helper function to create the correct locale layout.
 * See src/locale/en.ts for usage example
 */
export function genLocale(locale: Locale): Locale {
  return locale;
}

type Languages = "fi" | "en";
const validCodes: Languages[] = ["fi", "en"];
const langMatch = `(${validCodes.join("|")})`;
const defaultLang = "en";

export { validCodes, defaultLang, langMatch, Languages };
