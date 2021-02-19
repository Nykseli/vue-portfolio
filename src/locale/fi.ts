import { fi } from "vuetify/src/locale";
import { genLocale } from "./locale";

const fiLocale = genLocale({
  home: {
    typerInfo1: "Ohjelmistokehittäjä",
    typerInfo2: "Full Stack Devaaja",
    typerInfo3: "Koodi intoilija",
    description1:
      "Olen ohjelmistokehittäjä Turusta, joka on aina etsimässä uusia haasteita.",
    description2:
      "Käytän aikani opetellen erillaisia ohjelmistoja yrittäen hahmottaa mitkä työkalut sopivat minulle ja minkälaista ohjelmistoja haluan kehittää. Olenkin käyttänyt kaikenlaisia ohjelmistoja matalan tason assemblystä korkean tason pelikehitykseen Godot pelimoottorilla.",
    description3:
      "Vaikka olen erittäin kiinnostunut teknologoista, olen vielä kiinnostuneempi tekemään ohejelmistoja joita ihmiset haluavat käyttää. Sen takia olenkin viime aikoina pyrkinyt pois backend/linux IoT mukavuus alueeltani ja yrittänyt oppia graafista suunnittelua.",
    descriptionGreeting: "Hei vain!"
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
