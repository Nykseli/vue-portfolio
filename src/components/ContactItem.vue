<template>
  <v-row align="center" justify="center">
    <div class="contact-div">
      <v-icon color="secondary">{{ icon }}</v-icon>
      <a :href="link" target="_blank" rel="noopener noreferrer">
        <p class="secondary--text">{{ name }}</p>
      </a>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ContactItem extends Vue {
  @Prop({ required: true }) private icon!: string;
  @Prop({ required: true }) private link!: string;
  @Prop({ required: true }) private name!: string;
}
</script>

<style scoped>
p {
  padding-top: 9px;
  margin-left: 8px;
}

.contact-div {
  padding-top: 20px;
  display: flex;
  align-content: space-between;
}
</style>
