/* Locale imports are causing porblems when importing from scripts so disable them for now */
/* import { en } from "vuetify/src/locale"; */
import { genLocale } from "./locale";

const enLocale = genLocale({
  home: {
    typerInfo1: "Software Engineer",
    typerInfo2: "Full Stack Developer",
    typerInfo3: "Code enthusiast",
    description1:
      "I'm your friendly programmer from Turku, Finland who is always looking for new challenges.",
    description2:
      "I'm always learning new technologies and trying to figure out what tools are right for me and what can I utilize in my projects. I've used technogies from low level assembly to really high level game development with the Godot game engine. At the moment I'm combining my skills by developing a website that allows you to design websites. The project combines web technologies and 2D rendering capabilities of the Godot game engine.",
    description3:
      "While I am really passionate about technologies, my real passion is creating software that people want to use.",
    descriptionGreeting: "Hello there!",
  },
  skills: {
    description:
      "I'm always learning new technologies and frameworks. Here is a list of some of the technologies I have learned along the way. I'm not a big believer in \"skill list\" but I'm always happy to talk about my skills and knowledge in different topics!",
  },
  hobbies: {
    description1:
      "Along with getting familiar with new technologies I like to spend my free time on playing and listening to music. Going to conserts is one of my favorite pass time activity so I hope I get to do that again soon!",
    description2:
      "I also like going to art museums to enjoy art. Lately I've been learning how to draw and animate in the hopes that it will improve my graphical design skills. The animated robot on my website is drawn and animated by me!",
  },
  projects: {
    technology: "Technologies",
    item1: {
      title: "Graphical teletext reader",
      image: "/images/teletext-gui.jpg",
      link: "https://miikaalikirri.fi/viewer/teletext/",
      link2: "https://github.com/Nykseli/teletext-gui",
      link3: "",
      technology: "Rust egui",
      description:
        "Graphical teletext application for linux and windows, made with Rust and egui.",
    },
    item2: {
      title: "VueJs portfolio",
      image: "/images/website.jpg",
      link: "https://github.com/Nykseli/vue-portfolio",
      link2: "https://github.com/Nykseli/site-reader",
      link3: "https://txt.miikaalikirri.fi",
      technology: "TypeScript VueJs Vuetify",
      description:
        "VueJs website with TypeScript and Vuetify. Animations are drawn and animated by me! There is also a simple text version of the page that can be read even with a program written in assembly.",
    },
    item3: {
      title: "Yle Teksti-tv",
      image: "/images/teksti-tv.png",
      link: "https://github.com/Nykseli/yle-tekstitv",
      link2: "",
      link3: "",
      technology: "C ncurses",
      description:
        "Simple terminal application for reading text based Yle teletext.",
    },
    item4: {
      title: "Media Controller Server",
      image: "/images/media-controller.png",
      link: "https://github.com/Nykseli/media-controller-server",
      link2: "",
      link3: "",
      technology: "Python Linux",
      description:
        "Linux application for controlling media content and the target device. You can for example play vidoes with vlc or control netflix website with it.",
    },
    item5: {
      title: "Media Controller Client",
      image: "/images/media-client.png",
      link: "https://github.com/Nykseli/android-media-controller",
      link2: "",
      link3: "",
      technology: "Android Java",
      description:
        "Android client application for controlling the media server",
    },
  },
  experience: {
    title: "WORK EXPERIENCE",
    item1: {
      title: "Software Developer",
      company: "Vincit Oy",
      duration: "2022/08 - 2023/02",
      description1:
        "Maintained multiple fullstack projects with varying techonlogies such as AWS, TypeScript, Django, Groovy and Ruby on Rails.",
      description2: "Helped/mentored Trainee and Junior developers.",
      description3: "Learned the basics of AWS.",
      description4: 'Gave a talk about "Sustainable Web Development with Rust"',
      description5: "",
    },
    item2: {
      title: "Software Developer",
      company: "Sofokus Oy",
      duration: "2021/08 - 2022/02",
      description1:
        "Initial technical design and implementation of a new web based product, consisting a website and a React library. The work focused heavily on tooling and automatic code generation by utilizing TypeScript's compiler API.",
      description2:
        "Worked on client projects. Mostly on frontend but also did some backend work using Google Cloud Functions and Firestore.",
      description3: "Learned the basics of Google Cloud.",
      description4:
        "Helped other devs to imporove their skills and knowledge on different topics, like Typescript, testing and API design.",
      description5:
        "Helped the company to define guideliness for developers, so the company could have more unified way of doing things.",
    },
    item3: {
      title: "Freelancer / Student",
      company: "",
      duration: "2018 - 2021",
      description1:
        "Small freelance website projects with JavaScript (ReactJs, VueJs) and Php (Laravel).",
      description2:
        "Most of my freetime spent on getting familiar with new technologies.",
      description3: "Started studying in University of Turku.",
      description4:
        "Focusing on improving my customer relation and graphical desing skills and making better software for everyone.",
      description5: "",
    },
    item4: {
      title: "Full Stack / IoT developer",
      company: "Firstview",
      duration: "2017 - 2018",
      description1:
        "Responsible for maintaining and developing over 10 000 Linux and Android based digital signage IoT devices all over the world.",
      description2:
        "Part of the small full stack team that was responsible for developing the user interface controlling the IoT devices.",
      description3: "Linux based IoT devices: Python, Bash, C and C++.",
      description4: "Android development: Java and JavaScript (JQuery).",
      description5:
        "Full Stack development: JavaScript (JQuery, ReactJs) and Php.",
    },
  },
  talks: {
    title: "Talks",
    introduction:
      "So far I've had only one opportunity to give a programming related talk and it's something I would like to do more in the future. It's really rewarding to teach others about the technologies I'm personally a fan of.",
    talk1: {
      title: "Sustainable Web Development With Rust",
      description:
        "In this talk, I talked about how Rust can be used in web development to create sustainable software. Sustainable meaning code that's efficient to develop and maintain, and that uses as few resources as possible to make it environmentally friendly.",
      link: "/talks/Sustainable_Web_Development_With_Rust.pdf",
      link_description: "Talk Pdf (in English)",
      image: "/images/rust-webdev-talk.jpg",
    },
  },
  contact: {
    title: "Contact Information",
  },
  navigation: {
    talks: "Talks",
    skills: "Skills",
    contact: "Contact",
    hobbies: "Hobbies",
    projects: "Projects",
    frontPage: "Frontpage",
    experience: "Experience",
  },
});

export default {
  /*   ...en, */
  ...enLocale,
};
