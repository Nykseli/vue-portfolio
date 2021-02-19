import { en } from "vuetify/src/locale";
import { genLocale } from "./locale";

const enLocale = genLocale({
  home: {
    typerInfo1: "Software Engineer",
    typerInfo2: "Full Stack Developer",
    typerInfo3: "Code enthusiast",
    description1:
      "I'm your friendly programmer from Turku, Finland who is always looking for new challenges.",
    description2:
      "I'm always learning new technologies and trying to figure out what tools are right for me and what can I utilize in my projects. I've used technogies from low level assembly to really high level game development with the Godot game engine.",
    description3:
      "While I am really passionate about technologies, my real passion is creating software that people want to use. That's why I am currently getting out of my backend/linux IoT comfort zone and trying to learn nmore about graphical design.",
    descriptionGreeting: "Hello there!"
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
