import { VuetifyLocale } from "vuetify/types/services/lang";

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
}

/**
 * Translations for navigation panel
 */
interface NavigationLocale extends VuetifyLocale {
  skills: string;
  hobbies: string;
  projects: string;
  frontPage: string;
  experience: string;
}

interface Locale extends VuetifyLocale {
  home: HomeLocale;
  skills: SkillsLocale;
  hobbies: HobbiesLocale;
  projects: ProjectLocale;
  experience: ExperienceLocale;
  navigation: NavigationLocale;
}

/**
 * Helper function to create the correct locale layout.
 * See src/locale/en.ts for usage example
 */
export function genLocale(locale: Locale) {
  return locale;
}

const validCodes = ["fi", "en"];
const langMatch = `(${validCodes.join("|")})`;
const defaultLang = "en";

export { validCodes, defaultLang, langMatch };
