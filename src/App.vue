<template>
  <v-app id="app">
    <v-app-bar>
      <v-img
        class="mr-4"
        :width="$vuetify.breakpoint.xsOnly ? '60px' : '150px'"
        max-height="50"
        contain
        src="/Stern%20Institute%20cropped.png"
      />
      <v-tabs fixed-tabs>
        <v-tab href="#" @click="$scrollTo('#app')"> Map </v-tab>
        <v-tab href="#" @click="$scrollTo('#faq')"> FAQ </v-tab>
        <v-tab href="#" @click="$scrollTo('#about')"> About </v-tab>
      </v-tabs>
    </v-app-bar>

    <SneezleMap id="map" />

    <v-container>
      <v-divider />
      <h1 id="faq">FAQs</h1>

      <FAQs />

      <v-divider />
      <h1 id="about" class="mt-4">About</h1>

      <About />

      <v-divider />
      <h1>Get Involved!</h1>
    </v-container>

    <v-footer>
      <v-spacer />
      &copy;2021 - Quentin Saint
      <a href="https://test.com"
        ><svg-icon color="#1da1f2" type="mdi" :path="mdiTwitter"
      /></a>
      <a href="https://test.com"><svg-icon type="mdi" :path="mdiEmail" /></a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ><svg-icon color="#c4302b" type="mdi" :path="mdiYoutube"
      /></a>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SneezleMap from "@/components/SneezleMap.vue";
import FAQs from "@/components/FAQs.vue";
import About from "@/components/About.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiTwitter, mdiEmail, mdiYoutube } from "@mdi/js";

export default Vue.extend({
  name: "App",
  components: {
    About,
    FAQs,
    SneezleMap,
    SvgIcon,
  },
  data: () => ({
    mdiTwitter,
    mdiEmail,
    mdiYoutube,
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e5e8e9;
  color: #293371;
  overflow-x: hidden;
}
footer * {
  margin-left: 5px;
}
</style>
