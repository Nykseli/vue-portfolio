<template>
  <gif-info :title="title" gifPath="/images/projects.gif">
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
          <br />
          <p class="secondary--text">{{ technoTl(item.technology) }}</p>
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <p class="secondary--text">{{ item.link }}</p>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </gif-info>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GifInfo from "@/components/GifInfo.vue";
import { ProjectLocaleItem } from "@/locale/locale";

@Component({
  components: {
    GifInfo
  }
})
export default class Projects extends Vue {
  private tl(item: string, name: string): string {
    return this.$vuetify.lang.t(`$vuetify.projects.${item}.${name}`);
  }

  private item(item: string): ProjectLocaleItem {
    return {
      link: this.tl(item, "link"),
      image: this.tl(item, "image"),
      title: this.tl(item, "title"),
      // TODO: should technologies have links and/or logos?
      technology: this.tl(item, "technology"),
      description: this.tl(item, "description")
    };
  }

  private technoTl(tech: string): string {
    const techTl = this.$vuetify.lang.t(`$vuetify.projects.technology`);
    return `${techTl}: ${tech}`;
  }

  get items(): Array<ProjectLocaleItem> {
    return [
      this.item("item1"),
      this.item("item2"),
      this.item("item3"),
      this.item("item4")
    ];
  }

  get title() {
    return this.$vuetify.lang.t("$vuetify.navigation.projects").toUpperCase();
  }
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

p {
  line-height: 1.1;
}
</style>
