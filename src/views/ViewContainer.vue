<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { defaultLang } from "@/locale/locale";

/**
 * Entry point for all the views.
 *
 * All this does is handle the language locale from router.
 */
@Component({})
export default class ViewContainer extends Vue {
  beforeCreate() {
    // Use en as a default locale it's not set
    // TODO: handle invalid locales too?
    const locale = this.$route.params.lang || defaultLang;
    this.$vuetify.lang.current = locale;
  }
}
</script>
