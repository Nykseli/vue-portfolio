<template>
  <gif-info :title="title" gifPath="/images/skills.gif" :centeredSlot="true">
    <div class="info-skill-item">
      <p class="primary--text info-text">
        {{ this.$vuetify.lang.t("$vuetify.skills.description") }}
      </p>
      <v-col sm="12" align="center" justify="center">
        <v-row align="center" justify="center">
          <v-col v-for="(item, index) in technologies" :key="index" cols="6">
            <p class="primary--text technologies">
              <i :class="item.icon" class="dev-icon">
                <p class="primary--text">{{ item.name }}</p>
              </i>
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
import { technologies } from "@/locale/locale";

@Component({
  components: {
    GifInfo,
  },
})
export default class Skills extends Vue {
  get technologies(): typeof technologies {
    return technologies;
  }

  get title(): string {
    return this.$vuetify.lang.t("$vuetify.navigation.skills").toUpperCase();
  }
}
</script>

<style scoped>
.info-skill-item {
  overflow-x: hidden;
}

.dev-icon {
  font-size: 35px;
}

.col-6 {
  flex: 0 !important;
}

.info-text {
  text-align: center;
  padding-bottom: 16px;
}

.technologies {
  text-align: center !important;
}
</style>
