<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="secondary">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="secondary">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Data View
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
      <v-toolbar-title class="primary--text">Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn large icon dark>
          <v-icon @click="changeTheme()" size="30" color="primary">
            {{ lightIcon }}
          </v-icon>
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

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public drawer = null;
  public lightIcon = "mdi-lightbulb-on-outline";

  changeTheme() {
    const dark = !this.$vuetify.theme.dark;
    this.$vuetify.theme.dark = dark;
    this.lightIcon = dark ? "mdi-lightbulb " : "mdi-lightbulb-on-outline";
  }

  // light on
  // mdi-lightbulb-on-outline
  // light off
  // mdi-lightbulb
}
</script>
