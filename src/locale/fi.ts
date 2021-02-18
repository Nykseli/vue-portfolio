import { fi } from "vuetify/src/locale";
import { genLocale } from "./locale";

const fiLocale = genLocale({
  home: {
    typerInfo1: "Ohjelmistokehittäjä",
    typerInfo2: "Full Stack Devaaja",
    typerInfo3: "Koodi intoilija"
  },
  navigation: {
    skills: "Taidot",
    hobbies: "Harrastukset",
    projects: "Projektit",
    frontPage: "Etusivu",
    experience: "Työkokemus"
  }
});

export default {
  ...fi,
  ...fiLocale
};
