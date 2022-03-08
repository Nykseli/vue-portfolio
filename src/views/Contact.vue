<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <h1 class="success--text contact-header">
        {{ this.$vuetify.lang.t("$vuetify.contact.title") }}
      </h1>
    </v-row>
    <contact-item
      icon="mdi-github"
      name="Github"
      link="https://github.com/Nykseli"
    />
    <contact-item
      icon="mdi-linkedin"
      name="LinkedIn"
      link="https://www.linkedin.com/in/miika-alikirri-90aaba233/"
    />
    <contact-item
      icon="mdi-email"
      name="hi@miikaalikirri.fi"
      link="mailto:hi@miikaalikirri.fi"
    />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactItem from "@/components/ContactItem.vue";

@Component({
  components: {
    ContactItem,
  },
})
export default class Contact extends Vue {}
</script>

<style scope>
.contact-header {
  font-size: 54px;
  padding-top: 78px;
}

@media (min-width: 600px) and (max-width: 959px) {
  .contact-header {
    padding-top: 64px;
  }
}

@media (min-width: 600px) {
  .contact-header {
    font-size: 54px;
    padding-bottom: 0px;
  }
}

@media (max-width: 599px) {
  .contact-header {
    font-size: 40px;
    padding-top: 75px;
    padding-bottom: 25px;
  }
}
</style>
