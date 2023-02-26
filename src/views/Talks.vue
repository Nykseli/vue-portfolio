<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <h1 class="success--text talks-header">
        {{ this.$vuetify.lang.t("$vuetify.talks.title") }}
      </h1>
    </v-row>
    <v-row align="center" justify="center">
      <p class="secondary--text talks-description">
        {{ this.$vuetify.lang.t("$vuetify.talks.introduction") }}
      </p>
    </v-row>
    <v-row
      align="center"
      justify="center"
      class="talks-cards"
      v-for="(talk, index) in talks"
      :key="index"
    >
      <v-card class="talks-item-card">
        <v-card-subtitle>
          <h1 class="primary--text">{{ talk.title }}</h1>
        </v-card-subtitle>

        <v-card-text class="secondary--text">
          {{ talk.description }}
        </v-card-text>
        <a :href="talk.link">
          <v-card-text class="secondary--text talk-link-text">
            {{ talk.link_description }}
          </v-card-text>
        </a>
        <a :href="talk.link" target="_blank" rel="noopener noreferrer">
          <v-img height="350px" :src="talk.image" />
        </a>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { TalksLocaleItem } from "@/locale/locale";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Talks extends Vue {
  private tl(talk: string, name: string): string {
    return this.$vuetify.lang.t(`$vuetify.talks.${talk}.${name}`);
  }

  private talk(talk: string): TalksLocaleItem {
    return {
      link: this.tl(talk, "link"),
      image: this.tl(talk, "image"),
      title: this.tl(talk, "title"),
      description: this.tl(talk, "description"),
      link_description: this.tl(talk, "link_description"),
    };
  }

  get talks(): Array<TalksLocaleItem> {
    return [this.talk("talk1")];
  }

  get title(): string {
    return this.$vuetify.lang.t("$vuetify.navigation.projects").toUpperCase();
  }
}
</script>

<style scope>
.talks-header {
  font-size: 54px;
  padding-top: 78px;
}

.talks-description {
  width: 90%;
  max-width: 720;
}

.talks-cards {
  padding-top: 48px;
}

.talk-link-text {
  padding-top: 0;
}

@media (min-width: 600px) and (max-width: 959px) {
  .talks-item-card {
    max-width: 600px;
  }

  .talks-header {
    padding-top: 64px;
  }
}

@media (min-width: 600px) {
  .talks-header {
    font-size: 54px;
    padding-bottom: 0px;
  }

  .talks-item-card {
    width: 90%;
    max-width: 960px;
  }

  .talks-description {
    width: 90%;
    max-width: 720px;
  }
}

@media (max-width: 599px) {
  .talks-header {
    font-size: 40px;
    padding-top: 75px;
    padding-bottom: 25px;
  }

  .talks-description,
  .talks-item-card {
    max-width: calc(100% - 48px);
  }
}
</style>
