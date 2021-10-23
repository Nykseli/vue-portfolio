<template>
  <v-app id="inspire">
    <v-navigation-drawer disable-resize-watcher v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="routerPush('/')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-home-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text nav-text">
              {{ this.$vuetify.lang.t("$vuetify.navigation.frontPage") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="routerPush('/experience')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-form-select</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text nav-text">
              {{ this.$vuetify.lang.t("$vuetify.navigation.experience") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="routerPush('/projects')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-github</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text nav-text">
              {{ this.$vuetify.lang.t("$vuetify.navigation.projects") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="routerPush('/hobbies')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-guitar-acoustic</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text nav-text">
              {{ this.$vuetify.lang.t("$vuetify.navigation.hobbies") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="routerPush('/skills')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-toolbox-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text nav-text">
              {{ this.$vuetify.lang.t("$vuetify.navigation.skills") }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="primary--text">Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="primary--text" @click="changeLang('fi')" icon x-large>
          FI
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="primary--text" @click="changeLang('en')" icon x-large>
          EN
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn @click="changeTheme()" large icon dark>
          <v-icon size="30" color="primary">{{ lightIcon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { validCodes, langMatch, defaultLang } from "@/locale/locale";

@Component
export default class App extends Vue {
  public drawer = false;
  public lightIcon = "mdi-lightbulb-on-outline";

  changeTheme(): void {
    const dark = !this.$vuetify.theme.dark;
    this.$vuetify.theme.dark = dark;
    this.lightIcon = dark ? "mdi-lightbulb " : "mdi-lightbulb-on-outline";
  }

  /**
   * Change language and update url accordingly
   */
  changeLang(langCode: string): void {
    // If the language is all ready selected, we don't need to do anything
    if (this.$vuetify.lang.current === langCode) {
      return;
    }

    // Make sure that the language is set even if the page is not reloaded
    this.$vuetify.lang.current = langCode;

    // Then update the current url
    const currentPath = this.$router.currentRoute.path;
    let newPath = currentPath.replace(
      new RegExp(`^/${langMatch}`),
      `/${langCode}`
    );

    // Language prefix wasn't found so we need to add it to the path
    if (newPath === currentPath) {
      newPath = `/${langCode}${newPath}`;
    }

    // Remove he default language prefix if it's set
    if (newPath.slice(1, 3) === defaultLang) {
      // Set path to root if the slice return value is empty
      newPath = newPath.slice(3) || "/";
    }

    this.$router.push(newPath);
  }

  /**
   * Navigate to a page based on the path
   */
  routerPush(path: string): void {
    // Save the locale lang prefix to the path if it exists
    const current = this.$router.currentRoute.path;
    if (current.length >= 3) {
      const lang = current.slice(1, 3);
      if (validCodes.indexOf(lang) !== -1) {
        path = `/${lang}${path}`;
      }
    }

    // Don't try to navigate to the current location
    // This avoids the "Avoided redundant navigation to current location" error
    if (current != path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.v-main {
  /* Disable v-main padding so the window doesn't have 64 extra
     pixels in height for no apparent reason */
  padding: 0 !important;
}

.container {
  /* Override the vuetify container to avoid the weird full page scrolling */
  padding: 0px !important;
}

.nav-text {
  font-size: 22px !important;
  line-height: 2rem !important;
}
</style>
