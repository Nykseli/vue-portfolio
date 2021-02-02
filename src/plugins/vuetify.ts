import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#71b5ff",
        accent: "#afd7ff",
        secondary: "#517397",
        success: "#82a0c4",
        info: "#638caa",
        warning: "#5c6bc0",
        error: "#529cff"
      },
      light: {
        primary: "#38587b",
        accent: "#161f28",
        secondary: "#517397",
        success: "#82a0c4",
        info: "#638caa",
        warning: "#5c6bc0",
        error: "#529cff"
      }
    }
  }
});
