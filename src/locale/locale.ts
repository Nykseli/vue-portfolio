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
 * Translations for navigatoin panel
 */
interface Navigation extends VuetifyLocale {
  skills: string;
  hobbies: string;
  projects: string;
  frontPage: string;
  experience: string;
}

interface Locale extends VuetifyLocale {
  home: HomeLocale;
  navigation: Navigation;
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