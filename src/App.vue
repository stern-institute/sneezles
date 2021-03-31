<template>
  <v-app id="app">
    <v-app-bar>
      <v-img
        eager
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

    <h1 class="mt-4">Who's sneezing now?</h1>
    <SneezleMap id="map" />

    <v-container>
      <v-divider />
      <h1 id="faq">FAQs</h1>

      <FAQs />

      <v-divider />
      <h1 id="about" class="mt-4">About</h1>

      <About />

      <v-divider class="mt-8 mb-4" />
      <h1>Get Involved!</h1>
      <GetInvolved />
    </v-container>

    <a @click="privacy=true">
      Privacy policy
    </a>

    <Privacy :privacy.sync="privacy" />

    <SneezlesFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SneezleMap from "@/components/SneezleMap.vue";
import FAQs from "@/components/FAQs.vue";
import About from "@/components/About.vue";

import SneezlesFooter from "@/SneezlesFooter.vue";
import GetInvolved from "@/GetInvolved.vue";
import Privacy from "@/Privacy.vue";

export default Vue.extend({
  name: "App",
  components: {
    Privacy,
    GetInvolved,
    SneezlesFooter,
    About,
    FAQs,
    SneezleMap,
  },
  data: () => ({
    privacy: false,
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
</style>
