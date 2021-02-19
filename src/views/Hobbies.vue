<template>
  <gif-info :title="title" gifPath="/images/music-WIP1.gif">
    <div class="info-hobby-item">
      <p class="primary--text">{{ text }}</p>
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
export default class Hobbies extends Vue {
  // TODO: i18n
  // TODO: actual text
  public title = "HOBBIES";
  public text =
    "ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor";
}
</script>

<style scoped>
.info-hobby-item {
  overflow-x: hidden;
}

.info-hobby-item > p {
  margin-top: 50%;
  font-size: 22px;
}

/* See breakpoints from components/GifInfo.vue */
@media (min-width: 600px) {
  .info-hobby-item > p {
    margin-top: 50%;
  }
}

@media (max-width: 599px) {
  .info-hobby-item > p {
    margin-top: 5%;
  }
}
</style>
