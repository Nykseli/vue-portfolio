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

@Component({
  components: {
    GifInfo,
  },
})
export default class Skills extends Vue {
  //TODO: Should these be in order of relevance?
  // Icon names can be found in https://devicon.dev/
  private technologies = [
    {
      name: "Android",
      icon: "devicon-android-plain",
    },
    {
      name: "Babel",
      icon: "devicon-babel-plain",
    },
    {
      name: "Bash",
      icon: "devicon-bash-plain",
    },
    {
      name: "C",
      icon: "devicon-c-plain",
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain",
    },
    {
      name: "Css",
      icon: "devicon-css3-plain",
    },
    {
      name: "Django",
      icon: "devicon-django-plain",
    },
    {
      name: "Firebase",
      icon: "devicon-firebase-plain",
    },
    {
      name: "Flutter",
      icon: "devicon-flutter-plain",
    },
    {
      name: "Gcc",
      icon: "devicon-gcc-plain",
    },
    {
      name: "Git",
      icon: "devicon-git-plain",
    },
    {
      name: "Go",
      icon: "devicon-go-plain",
    },
    {
      name: "Godot",
      icon: "devicon-godot-plain",
    },
    {
      name: "Google Cloud",
      icon: "devicon-googlecloud-plain",
    },
    {
      name: "GrahpQL",
      icon: "devicon-graphql-plain",
    },
    {
      name: "Html",
      icon: "devicon-html5-plain",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
    },
    {
      name: "Jest",
      icon: "devicon-jest-plain",
    },
    {
      name: "Kotlin",
      icon: "devicon-kotlin-plain",
    },
    {
      name: "Laravel",
      icon: "devicon-laravel-plain",
    },
    {
      name: "Linux",
      icon: "devicon-linux-plain",
    },
    {
      name: "Material UI",
      icon: "devicon-materialui-plain",
    },
    {
      name: "Mysql",
      icon: "devicon-mysql-plain",
    },
    {
      name: "Node JS",
      icon: "devicon-nodejs-plain",
    },
    {
      name: "Npm",
      icon: "devicon-npm-original-wordmark",
    },
    {
      name: "Php",
      icon: "devicon-php-plain",
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
    },
    {
      name: "ReactJs",
      icon: "devicon-react-plain",
    },
    {
      name: "Redux",
      icon: "devicon-redux-original",
    },
    {
      name: "Rust",
      icon: "devicon-rust-plain",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
    },
    {
      name: "VueJs",
      icon: "devicon-vuejs-plain",
    },
    {
      name: "Yarn",
      icon: "devicon-yarn-plain",
    },
  ];

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
