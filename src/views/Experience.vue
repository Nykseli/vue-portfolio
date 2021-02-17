<template>
  <v-container class="experience-container" fill-height fluid>
    <v-row align="center" justify="center">
      <h1 class="success--text main-header">Work experience</h1>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" sm="6">
        <v-img class="animated-gif" src="images/music-WIP1.gif" />
      </v-col>
      <v-col class="experience-text primary--text" align="center" sm="6">
        <v-card class="info-scroll-card">
          <div
            class="info-job-item"
            v-for="(item, index) in items"
            :key="index"
          >
            <h1 class="accent--text">{{ item.title }}</h1>
            <h2 class="primary--text">{{ item.company }}</h2>
            <h3 class="primary--text">{{ item.duration }}</h3>
            <p
              class="secondary--text"
              v-for="(p, i2) in item.descriptions"
              :key="i2"
            >
              - {{ p }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Experience extends Vue {
  // TODO: i18n
  // TODO: actual text
  public items = [
    {
      title: "Job title",
      company: "company",
      duration: "2013-2014",
      descriptions: [
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor"
      ]
    },
    {
      title: "Job title",
      company: "company",
      duration: "2013-2014",
      descriptions: [
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor"
      ]
    },
    {
      title: "Job title",
      company: "company",
      duration: "2013-2014",
      descriptions: [
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor",
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor"
      ]
    }
  ];
}
</script>

<style scoped>
.experience-container {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
}

.experience-title {
  display: inline-block;
  text-align: right;
}

.vuebar-element {
  max-height: 70vh;
}

.experience-text {
  text-align: left;
  padding-bottom: 20px;
}

.info-scroll-card {
  height: 70vh;
  box-shadow: none !important;
}

.info-job-item > h1 {
  font-size: 38px;
}

.info-job-item > h2 {
  font-size: 20px;
}

.info-job-item > h3 {
  font-size: 18px;
  padding-bottom: 10px;
}

.main-header {
  font-size: 54px;
  padding-top: 50px;
}

/* 600px is the sm grid brekpoint */
@media (min-width: 600px) {
  .info-scroll-card {
    overflow-y: scroll !important;
  }

  .experience-text {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  .main-header {
    font-size: 54px;
    padding-top: 50px;
    padding-bottom: 0px;
  }
}

@media (max-width: 599px) {
  .info-scroll-card {
    overflow-y: visible !important;
  }

  .experience-text {
    padding-left: 5%;
    padding-right: 5%;
  }

  .main-header {
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
