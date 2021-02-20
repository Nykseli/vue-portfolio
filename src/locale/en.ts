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
  projects: {
    technology: "Technologies",
    item1: {
      title: "VueJs portfolio",
      image: "/images/website.jpg",
      link: "https://github.com/Nykseli/vue-portfolio",
      technology: "TypeScript VueJs Vuetify",
      description:
        "VueJs website with TypeScript and Vuetify. Animations are drawn and animated by me!"
    },
    item2: {
      title: "Yle Teksti-tv",
      image: "/images/teksti-tv.png",
      link: "https://github.com/Nykseli/yle-tekstitv",
      technology: "C ncurses",
      description:
        "Simple terminal application for reading text based Yle teletext."
    },
    item3: {
      title: "Media Controller Server",
      image: "/images/media-controller.png",
      link: "https://github.com/Nykseli/media-controller-server",
      technology: "Python Linux",
      description:
        "Linux application for controlling media content and the target device. You can for example play vidoes with vlc or control netflix website with it."
    },
    item4: {
      title: "Media Controller Client",
      image: "/images/media-client.png",
      link: "https://github.com/Nykseli/android-media-controller",
      technology: "Android Java",
      description: "Android client application for controlling the media server"
    }
  },
  experience: {
    title: "WORK EXPERIENCE",
    item1: {
      title: "Freelancer / Student",
      company: "",
      duration: "2018 - present",
      description1:
        "Small freelance website projects with JavaScript (ReactJs, VueJs) and Php (Laravel).",
      description2:
        "Most of my freetime spent on getting familiar with new technologies.",
      description3: "Started studying in University of Turku.",
      description4:
        "Focusing on improving my customer relation and graphical desing skills and making better software for everyone.",
      description5: ""
    },
    item2: {
      title: "Full Stack / IoT developer",
      company: "Firstview",
      duration: "2016 - 2017",
      description1:
        "Responsible for maintaining and developing over 10 000 Linux and Android based digital signage IoT devices all over the world.",
      description2:
        "Part of the small full stack team that was responsible for developing the user interface controlling the IoT devices.",
      description3: "Linux based IoT devices: Python, Bash, C and C++.",
      description4: "Android development: Java and JavaScript (JQuery).",
      description5:
        "Full Stack development: JavaScript (JQuery, ReactJs) and Php."
    }
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
