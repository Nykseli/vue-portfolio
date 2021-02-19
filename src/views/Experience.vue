<template>
  <gif-info :title="title" gifPath="/images/music-WIP1.gif">
    <div class="info-job-item" v-for="(item, index) in items" :key="index">
      <h1 class="accent--text">{{ item.title }}</h1>
      <h2 class="primary--text">{{ item.company }}</h2>
      <h3 class="primary--text">{{ item.duration }}</h3>
      <p class="secondary--text" v-for="(p, i2) in item.descriptions" :key="i2">
        - {{ p }}
      </p>
    </div>
  </gif-info>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GifInfo from "@/components/GifInfo.vue";

@Component({
  components: {
    GifInfo
  }
})
export default class Experience extends Vue {
  // TODO: i18n
  // TODO: actual text
  public title = "Work experience";
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
.info-job-item {
  margin-right: 10px;
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
</style>
