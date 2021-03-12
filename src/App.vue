<template>
  <v-app id="app">
    <v-app-bar>
      <v-tabs fixed-tabs>
        <v-tab href="#" @click="$scrollTo('#app')"> Map </v-tab>
        <v-tab href="#" @click="$scrollTo('#faq')"> FAQ </v-tab>
        <v-tab href="#" @click="$scrollTo('#about')"> About </v-tab>
      </v-tabs>
    </v-app-bar>

    <SneezleMap id="map"/>

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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SneezleMap from "@/components/SneezleMap.vue";
import FAQs from "@/components/FAQs.vue";
import About from "@/components/About.vue";

export default Vue.extend({
  name: "App",
  components: {
    About,
    FAQs,
    SneezleMap,
  },
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
