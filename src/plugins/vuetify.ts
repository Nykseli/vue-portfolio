import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import en from "@/locale/en";
import fi from "@/locale/fi";
import { defaultLang } from "@/locale/locale";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    // Application UI design is mainly for the light theme
    dark: false,
    themes: {
      dark: {
        primary: "#71b5ff",
        accent: "#afd7ff",
        secondary: "#517397",
        success: "#82a0c4",
        info: "#638caa",
        warning: "#5c6bc0",
        error: "#529cff",
      },
      light: {
        primary: "#38587b",
        accent: "#161f28",
        secondary: "#517397",
        success: "#82a0c4",
        info: "#638caa",
        warning: "#5c6bc0",
        error: "#529cff",
      },
    },
  },
  lang: {
    locales: { fi, en },
    current: defaultLang,
  },
});
