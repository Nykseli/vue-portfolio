<template>
  <v-app id="inspire">
    <v-navigation-drawer disable-resize-watcher v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="$router.push('/')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$router.push('/experience')">
          <v-list-item-action>
            <v-icon color="secondary">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Experience
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="secondary">mdi-api</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Api View
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

@Component
export default class App extends Vue {
  public drawer = false;
  public lightIcon = "mdi-lightbulb-on-outline";

  changeTheme() {
    const dark = !this.$vuetify.theme.dark;
    this.$vuetify.theme.dark = dark;
    this.lightIcon = dark ? "mdi-lightbulb " : "mdi-lightbulb-on-outline";
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
</style>
