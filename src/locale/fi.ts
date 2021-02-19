import { fi } from "vuetify/src/locale";
import { genLocale } from "./locale";

const fiLocale = genLocale({
  home: {
    typerInfo1: "Ohjelmistokehittäjä",
    typerInfo2: "Full Stack Devaaja",
    typerInfo3: "Koodi intoilija",
    description1:
      "Olen ohjelmistokehittäjä Turusta joka on aina etsimässä uusia haasteita.",
    description2:
      "Käytän aikani opetellen erillaisia ohjelmistoja yrittäen hahmottaa mitkä työkalut sopivat minulle ja minkälaista ohjelmistoja haluan kehittää. Olenkin käyttänyt kaikenlaisia ohjelmistoja matalan tason assemblystä korkean tason pelikehitykseen Godot pelimoottorilla.",
    description3:
      "Vaikka olen erittäin kiinnostunut teknologoista, olen vielä kiinnostuneempi tekemään ohjelmistoja joita ihmiset haluavat käyttää. Sen takia olenkin viime aikoina pyrkinyt pois backend/linux IoT mukavuus alueeltani ja yrittänyt oppia graafista suunnittelua.",
    descriptionGreeting: "Hei vain!"
  },
  skills: {
    description:
      "Opiskelen jatkuvasti uusia teknologioita ja kirjastoja. Tässä lista teknologioista joista on matkan varrella kertynyt enemmän tai vähemmän kokemusta!"
  },
  hobbies: {
    description1:
      "Uusien teknologioiden oppimisen lisäksi tykkään käyttää vapaa-aikani soitten ja kuunnellen musiikkia. Keikoilla käynti on yksi lempi puuhistani joten toivon että pääsen pian katsomaan keikkoja!",
    description2:
      "Tykkään käydä myös taidemuseoissa ja nauttia maalaustaiteesta. Olenkin viimeaikoina opetellut piirtämään ja animoimaan siinä toivottossa että se parantaisi minun graaffisen suunnittelun taitoja. Sivuilla näkyvä robotti onkin minun piirtämä ja animoima!"
  },
  navigation: {
    skills: "Osaaminen",
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
