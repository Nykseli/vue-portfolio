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
  skills: {
    description:
      "I'm always learning new technologies and frameworks. Here is a list of some of the technologies I have learned along the way."
  },
  hobbies: {
    description1:
      "Along with getting familiar with new technologies I like to spend my free time on playing and listening to music. Going to conserts is one of my favorite pass time activity so I hope I get to do that again soon!",
    description2:
      "I also like going to art museums to enjoy art. Lately I've been learning how to draw and animate in the hopes that it will improve my graphical design skills. The animated robot on my website is drawn and animated by me!"
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
