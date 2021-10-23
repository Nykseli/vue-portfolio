<template>
  <div class="home">
    <v-img class="full-img" src="/images/pexels-small.jpg">
      <v-container fill-height fluid>
        <v-row align="center">
          <!--
              Having an empty row heree makes the spacing perfect
              in desktop and mobile
          -->
        </v-row>
        <v-row align="center">
          <v-col class="home-info" align="center">
            <h1>
              Miika
              <span class="primary--text">Alikirri</span>
            </h1>
            <div class="vue-typer-container">
              <vue-typer
                :text="typerList"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="500"
                :type-delay="80"
                :pre-erase-delay="2000"
                :erase-delay="80"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="blink"
              ></vue-typer>
            </div>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col align="center">
            <div class="home-screen-arrow">
              <div @click="scrollToHomeAbout" class="arrow-animation">
                <v-img src="/images/up-arrow-svg-blue.svg"></v-img>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-img
      class="full-img home-about-scroll"
      position="right"
      src="/images/miika-optim.jpg"
    >
      <v-container fill-height flud>
        <v-row align="center">
          <v-col class="intro-text-col" algin="center" lg="5" offset-lg="6">
            <!-- TODO: Make this text easier to read -->
            <p>
              {{ this.$vuetify.lang.t("$vuetify.home.descriptionGreeting") }}
            </p>
            <p>{{ this.$vuetify.lang.t("$vuetify.home.description1") }}</p>
            <p>{{ this.$vuetify.lang.t("$vuetify.home.description2") }}</p>
            <p>{{ this.$vuetify.lang.t("$vuetify.home.description3") }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// vue-typer doesn't support types so we have to import it the ugly way
// TODO: vue-typer is really small. Maybe copy the code to this project instead of installing it with npm
// eslint-disable-next-line
const VueTyper = require("vue-typer").VueTyper;

@Component({
  components: {
    VueTyper,
  },
})
export default class Home extends Vue {
  // get means that the values are computed i.e. updated lang.current is changed
  get typerList(): Array<string> {
    return [
      this.$vuetify.lang.t("$vuetify.home.typerInfo1"),
      this.$vuetify.lang.t("$vuetify.home.typerInfo2"),
      this.$vuetify.lang.t("$vuetify.home.typerInfo3"),
    ];
  }

  scrollToHomeAbout(): void {
    const el = this.$el.getElementsByClassName("home-about-scroll")[0];

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<style>
/* Vue typer text.
   This doesn't work in scoped style */
.vue-typer .typed {
  color: #517397 !important;
  font-size: 4vh !important;
}

.vue-typer-container {
  /* Match the height with vue-typer text height
     This makes sure that the div size is never 0
     even when there are no characters to be shown */
  height: 4vh;
}

/* "Hack" to hide the caret */
.vue-typer .caret {
  display: none;
}

.intro-text-col {
  margin: 5vw;
}
</style>

<style scope>
.full-img {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
}

.home-info {
  /* Home info should always have white color, regardless of the style */
  color: #f5f5f5;
  position: relative;
}
.home-info h1 {
  font-size: 10vh;
  line-height: 1.1;
}

.home-screen-arrow {
  height: 15vh;
  width: 15vh;
  opacity: 0.85;
  position: relative;
  cursor: pointer;
}

.arrow-animation {
  animation: MoveUpDown 1.5s ease-in-out infinite;
  left: 0;
  bottom: 0;
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}

p {
  /* TODO: should the color be based on the theme or always white? */
  color: #f5f5f5;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 10px !important;
}

.container {
  padding: 0;
}
</style>
