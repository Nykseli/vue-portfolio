<template>
  <v-container class="gifinfo-container" fill-height fluid>
    <v-row align="center" justify="center">
      <h1 class="success--text gifinfo-main-header">{{ title }}</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" sm="6">
        <img class="animated-gif" :src="gifPath" />
      </v-col>
      <v-col class="gifinfo-text primary--text" align="center" sm="6">
        <v-card class="gifinfo-scroll-card" :class="centered">
          <!-- The layout is injected to replace to slot -->
          <slot></slot>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class GifInfo extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true }) private gifPath!: string;
  @Prop({ required: false }) private centeredSlot?: boolean;

  get centered(): string {
    return this.centeredSlot ? "centered-slot" : "";
  }
}
</script>

<style scoped>
.gifinfo-container {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
}

.gifinfo-text {
  text-align: left;
  padding-bottom: 20px;
}

.gifinfo-scroll-card {
  box-shadow: none !important;
  /* We want a transparent background on both dark and light theme */
  background: #00000000 !important;
}

.centered-slot {
  align-items: center;
  display: grid;
}

.gifinfo-main-header {
  font-size: 54px;
  padding-top: 50px;
}

.animated-gif >>> .v-responsive__content {
  /* Enable earlier breakpoint regartless of the gif size */
  width: 800px !important;
}

/* 600px is the sm grid brekpoint */
@media (min-width: 600px) {
  .gifinfo-scroll-card {
    height: 70vh;
    overflow-y: auto !important;
  }

  .gifinfo-text {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  .gifinfo-main-header {
    font-size: 54px;
    padding-top: 50px;
    padding-bottom: 0px;
  }
}

@media (max-width: 599px) {
  .gifinfo-scroll-card {
    height: 100%;
    max-height: 70vh;
    overflow-y: visible !important;
  }

  .gifinfo-text {
    padding-left: 5%;
    padding-right: 5%;
  }

  .gifinfo-main-header {
    font-size: 40px;
    padding-top: 75px;
    padding-bottom: 25px;
  }
}

.animated-gif {
  width: 60% !important;
  height: 60% !important;
}
</style>
