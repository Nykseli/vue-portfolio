<template>
  <!-- Turn off centered when adding a 3rd experience column  -->
  <gif-info
    :title="title"
    gifPath="/images/experience.gif"
    :centeredSlot="true"
  >
    <div class="info-job-item" v-for="(item, index) in items" :key="index">
      <h1 class="accent--text">{{ item.title }}</h1>
      <h2 class="primary--text">{{ item.company }}</h2>
      <h3 class="primary--text">{{ item.duration }}</h3>
      <!-- TODO: sparate v-ifs for each description field? -->
      <p
        class="secondary--text"
        v-for="(p, i2) in pFilter(item.descriptions)"
        :key="i2"
      >
        - {{ p }}
      </p>
    </div>
  </gif-info>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GifInfo from "@/components/GifInfo.vue";

type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  descriptions: Array<string>;
};

@Component({
  components: {
    GifInfo,
  },
})
export default class Experience extends Vue {
  private tl(item: string, name: string): string {
    return this.$vuetify.lang.t(`$vuetify.experience.${item}.${name}`);
  }

  private item(item: string): ExperienceItem {
    return {
      title: this.tl(item, "title"),
      company: this.tl(item, "company"),
      duration: this.tl(item, "duration"),
      descriptions: [
        this.tl(item, "description1"),
        this.tl(item, "description2"),
        this.tl(item, "description3"),
        this.tl(item, "description4"),
        this.tl(item, "description5"),
      ],
    };
  }

  /* Filter empty descriptions */
  private pFilter(items: Array<string>): Array<string> {
    return items.filter((value) => value.length !== 0);
  }

  get items(): Array<ExperienceItem> {
    return [
      this.item("item1"),
      this.item("item2"),
      this.item("item3"),
      this.item("item4"),
    ];
  }

  get title(): string {
    return this.$vuetify.lang.t("$vuetify.experience.title").toUpperCase();
  }
}
</script>

<style scoped>
.info-job-item {
  margin-right: 10px;
  padding-bottom: 30px;
  line-height: 1.3;
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

.info-job-item > p {
  line-height: 1.2;
}
</style>
