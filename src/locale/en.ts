import { en } from "vuetify/src/locale";
import { genLocale } from "./locale";

const enLocale = genLocale({
  home: {
    typerInfo1: "Software Engineer",
    typerInfo2: "Full Stack Developer",
    typerInfo3: "Code enthusiast"
  },
  navigation: {
    skills: "Skills",
    hobbies: "Hobbies",
    projects: "Projects",
    frontPage: "Frontpage",
    experience: "Experience"
  }
});

export default {
  ...en,
  ...enLocale
};
