<template>
  <gif-info
    :title="title"
    gifPath="/images/music-WIP1.gif"
    :centeredSlot="true"
  >
    <div class="info-skill-item">
      <p class="primary--text">
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

@Component({
  components: {
    GifInfo
  }
})
export default class Skills extends Vue {
  //TODO: Should these be in order of relevance?
  // Icon names can be found in https://devicon.dev/
  private technologies = [
    {
      name: "Android",
      icon: "devicon-android-plain"
    },
    {
      name: "Bash",
      icon: "devicon-bash-plain"
    },
    {
      name: "C",
      icon: "devicon-c-plain"
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain"
    },
    {
      name: "Css",
      icon: "devicon-css3-plain"
    },
    {
      name: "Flutter",
      icon: "devicon-flutter-plain"
    },
    {
      name: "Git",
      icon: "devicon-git-plain"
    },
    {
      name: "Go",
      icon: "devicon-go-plain"
    },
    {
      name: "Html",
      icon: "devicon-html5-plain"
    },
    {
      name: "Java",
      icon: "devicon-java-plain"
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain"
    },
    {
      name: "Kotlin",
      icon: "devicon-kotlin-plain"
    },
    {
      name: "Linux",
      icon: "devicon-linux-plain"
    },
    {
      name: "Mysql",
      icon: "devicon-mysql-plain"
    },
    {
      name: "Php",
      icon: "devicon-php-plain"
    },
    {
      name: "Python",
      icon: "devicon-python-plain"
    },
    {
      name: "ReactJs",
      icon: "devicon-react-plain"
    },
    {
      name: "Rust",
      icon: "devicon-rust-plain"
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain"
    },
    {
      name: "VueJs",
      icon: "devicon-vuejs-plain"
    }
  ];

  get title() {
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

.technologies {
  text-align: center !important;
}
</style>
