<template>
  <gif-info :title="title" gifPath="images/music-WIP1.gif">
    <div class="info-skill-item">
      <p class="primary--text">{{ description }}</p>
      <v-col sm="12" align="middle" justify="middle">
        <v-row align="middle" justify="middle">
          <v-col v-for="(item, index) in technologies" :key="index" cols="6">
            <p class="primary--text iline">
              <i :class="item.icon" class="dev-icon iline"></i>
              {{ item.name }}
            </p>
          </v-col>
        </v-row>
      </v-col>
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
export default class Skills extends Vue {
  // TODO: i18n
  // TODO: actual short description of my skills
  public title = "SKILLS";
  public description =
    "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor";
  //TODO: an actual list of techologies
  // Search from https://devicon.dev/
  private technologies = [
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    },
    {
      name: "Javascript",
      icon: "devicon-aftereffects-plain"
    }
  ];
}
</script>

<style scoped>
.info-skill-item {
  overflow-x: hidden;
}

.dev-icon {
  font-size: 35px;
}

.iline {
  display: inline;
}
</style>
