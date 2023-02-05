/* Locale imports are causing porblems when importing from scripts so disable them for now */
/* import { fi } from "vuetify/src/locale"; */
import { genLocale } from "./locale";

const fiLocale = genLocale({
  home: {
    typerInfo1: "Ohjelmistokehittäjä",
    typerInfo2: "Full Stack Devaaja",
    typerInfo3: "Koodi intoilija",
    description1:
      "Olen ohjelmistokehittäjä Turusta joka on aina etsimässä uusia haasteita.",
    description2:
      "Käytän aikani opetellen erillaisia ohjelmistoja yrittäen hahmottaa mitkä työkalut sopivat minulle ja minkälaista ohjelmistoja haluan kehittää. Olenkin käyttänyt kaikenlaisia ohjelmistoja matalan tason assemblystä korkean tason pelikehitykseen Godot pelimoottorilla. Tällä hetkellä olenkin yhdistämässä osaamisalueitani kehittämällä nettisivun jonka avulla voi suunnitella nettisivuja. Projektissa yhdistyy web teknologiat sekä Godot pelimoottorin 2D renderöiti.",
    description3:
      "Vaikka olen erittäin kiinnostunut teknologoista, olen vielä kiinnostuneempi tekemään ohjelmistoja joita ihmiset haluavat käyttää.",
    descriptionGreeting: "Hei vain!",
  },
  skills: {
    description:
      'Opiskelen jatkuvasti uusia teknologioita ja kirjastoja. Tässä lista teknologioista joista on matkan varrella kertynyt enemmän tai vähemmän kokemusta. En ole mikään suurin "osaamis -listojen" fani, mutta keskustelen mielelläni lisää osaamisestani!',
  },
  hobbies: {
    description1:
      "Uusien teknologioiden oppimisen lisäksi tykkään käyttää vapaa-aikani soitten ja kuunnellen musiikkia. Keikoilla käynti on yksi lempi puuhistani joten toivon että pääsen pian katsomaan keikkoja!",
    description2:
      "Tykkään käydä myös taidemuseoissa ja nauttia maalaustaiteesta. Olenkin viimeaikoina opetellut piirtämään ja animoimaan siinä toivottossa että se parantaisi minun graaffisen suunnittelun taitoja. Sivuilla näkyvä robotti onkin minun piirtämä ja animoima!",
  },
  projects: {
    technology: "Teknologiat",
    item1: {
      title: "Graaffinen Teksti-Tv",
      image: "/images/teletext-gui.jpg",
      link: "https://github.com/Nykseli/teletext-gui",
      technology: "Rust egui",
      description:
        "Rustilla ja egui-kirjastolla toteutettu graaffinen tekstitv applikaatio windowsille ja linuxille.",
    },
    item2: {
      title: "VueJs portfolio",
      image: "/images/website.jpg",
      link: "https://github.com/Nykseli/vue-portfolio",
      technology: "TypeScript VueJs Vuetify",
      description:
        "VueJs:llä toteutettu nettisivu, TypeScript:iä ja Vietify -kirjastoa hyödyntäen. Animaatiot ovat minun piirtämiä ja animoimia!",
    },
    item3: {
      title: "Yle Teksti-tv",
      image: "/images/teksti-tv.png",
      link: "https://github.com/Nykseli/yle-tekstitv",
      technology: "C ncurses",
      description:
        "Yksinkertainen terminaali applikaatio Ylen tekstipohjaisen teksti-tv:n lukemiseen.",
    },
    item4: {
      title: "Media Controller Server",
      image: "/images/media-controller.png",
      link: "https://github.com/Nykseli/media-controller-server",
      technology: "Python Linux",
      description:
        "Linux applikaatio media sisällön ja laitteeen ohjaamiseen. Tällä voi muunmuassa katsoa videoita VLC soittimella tai ohjata Netflix nettisivua.",
    },
    item5: {
      title: "Media Controller Client",
      image: "/images/media-client.png",
      link: "https://github.com/Nykseli/android-media-controller",
      technology: "Android Java",
      description:
        "Android pohjainen asiakasohjelma media serverin ohjaamiseen.",
    },
  },
  experience: {
    title: "TYÖKOKEMUS",
    item1: {
      title: "Software Developer",
      company: "Vincit Oy",
      duration: "2022/08 - 2023/02",
      description1:
        "Ylläpidin useita Fullstack projekteja monella eri teknologialla kuten AWS, TypeScript, Django, Groovy ja Ruby on Rails.",
      description2: "Aution/mentoroin Trainee ja Junior devaajia.",
      description3: "Opettelin AWS:n persusteet.",
      description4:
        'Pidin puheen aiheesta: "Sustainable Web Development with Rust"',
      description5: "",
    },
    item2: {
      title: "Software Developer",
      company: "Sofokus Oy",
      duration: "2021/08 - 2022/02",
      description1:
        "Uuden verkkopohjaisen tuotteen alustava tekninen suunnittelu ja toteutus, joka koostuu verkkosivuston ja React-kirjaston rakentamisesta. Työ keskittyi vahvasti työkalujen kehittämiseen ja automaattiseen koodin tuottamiseen TypeScriptin kääntäjän API:a hyödyntäen.",
      description2:
        "Työskentelin asiakasprojekteissa. Enimmäkseen frontendin parissa, mutta myös jonkin verran backend-työtä Google Cloud Functioneita ja Firestorea käyttäen.",
      description3: "Opettelin Google Cloud:in perusteet.",
      description4:
        "Autoin muita kehittäjiä lisäämään taitojaan ja tietämystään eri aiheista, kuten Typescriptistä, testauksesta ja API-suunnittelusta.",
      description5:
        "Autoin yritystä määrittelemään ohjeita kehittäjille, jotta yrityksellä olisi yhtenäisempi tapa toimia.",
    },
    item3: {
      title: "Freelanseri / Opiskelija",
      company: "",
      duration: "2018 - nyt",
      description1:
        "Pieniä freelanseri nettisivu projekteja Javasciptillä (ReactJs, VueJs) ja Php:llä (Laravel)",
      description2:
        "Suurin osa vapaa-ajasta käytetty uusien teknologioiden oppimiseen.",
      description3: "Aloitin opiskelut Turun Yliopistossa.",
      description4:
        "Keskittynyt parantamaan asiakaskontakti ja graafisen suunnitelun taitoja sekä tekemään parempia ohjelmisoja kaikille.",
      description5: "",
    },
    item4: {
      title: "Full Stack / IoT Devaaja",
      company: "Firstview",
      duration: "2017 - 2018",
      description1:
        "Vastuussa yli 10 000 Linux ja android pohjaisen IoT laitteen ylläpidosta ja kehityksestä.",
      description2:
        "Osana pientä Full Stack tiimiä joka oli vastuussa käyttöliittymän kehityksessä jolla ohjattiin IoT laitteita.",
      description3: "Linux pohjaiset IoT laitteet: Python, Bash, C ja C++.",
      description4: "Android kehitys: Java ja JavaScript (JQuery).",
      description5:
        "Full Stack kehitys: JavaSript (JQuery, ReactJs) ja Php (Laravel).",
    },
  },
  contact: {
    title: "Yhteystiedot",
  },
  navigation: {
    skills: "Osaaminen",
    contact: "Yhteystiedot",
    hobbies: "Harrastukset",
    projects: "Projektit",
    frontPage: "Etusivu",
    experience: "Työkokemus",
  },
});

export default {
  /*   ...fi, */
  ...fiLocale,
};
