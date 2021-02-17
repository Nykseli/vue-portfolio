<template>
  <gif-info :title="title" gifPath="images/music-WIP1.gif">
    <div class="info-project-item" v-for="(item, index) in items" :key="index">
      <v-card>
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <v-img height="350px" :src="item.image" />
        </a>
        <v-card-subtitle>
          <h1 class="primary--text">{{ item.title }}</h1>
        </v-card-subtitle>
        <v-card-text>
          <p class="secondary--text">{{ item.description }}</p>
        </v-card-text>
      </v-card>
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
  public title = "Projects";
  public items = [
    {
      title: "Project title",
      image: "images/pexels-small.jpg",
      link: "https://github.com/Nykseli/yle-tekstitv",
      description:
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor"
    },
    {
      title: "Project title",
      image: "images/miika-optim.jpg",
      link: "https://github.com/Nykseli/yle-tekstitv",
      description:
        "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor"
    }
  ];
}
</script>

<style scoped>
.info-project-item {
  margin-bottom: 25px;
}

.info-project-item > h1 {
  font-size: 38px;
}

.info-project-item > h2 {
  font-size: 20px;
}

.info-project-item > h3 {
  font-size: 18px;
  padding-bottom: 10px;
}
</style>
