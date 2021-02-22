<template>
  <gif-info :title="title" gifPath="/images/hobbies.gif" :centeredSlot="true">
    <div class="info-hobby-item">
      <p class="primary--text">
        {{ this.$vuetify.lang.t("$vuetify.hobbies.description1") }}
      </p>
      <p class="primary--text">
        {{ this.$vuetify.lang.t("$vuetify.hobbies.description2") }}
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
export default class Hobbies extends Vue {
  get title() {
    return this.$vuetify.lang.t("$vuetify.navigation.hobbies").toUpperCase();
  }
}
</script>

<style scoped>
.info-hobby-item {
  overflow-x: hidden;
}

.info-hobby-item > p {
  margin-top: 0;
  font-size: 22px;
}

/* See breakpoints from components/GifInfo.vue */
@media (min-width: 600px) {
  .info-hobby-item > p {
    margin-top: 0;
  }
}

@media (max-width: 599px) {
  .info-hobby-item > p {
    margin-top: 5%;
  }
}
</style>
