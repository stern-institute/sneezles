<template>
  <v-app id="app">
    <v-app-bar>
      <v-tabs fixed-tabs>
        <v-tab> Map </v-tab>
        <v-tab> FAQ </v-tab>
        <v-tab> About </v-tab>
      </v-tabs>
    </v-app-bar>

    <SneezleMap />

    <v-divider />
    <h1>FAQs</h1>

    <v-divider />
    <h1>About</h1>

    <v-divider />
    <h1>Get Involved!</h1>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SneezleMap from "@/SneezleMap.vue";

export default Vue.extend({
  name: "App",
  components: {
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
}
</style>
