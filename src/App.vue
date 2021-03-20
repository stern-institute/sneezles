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
      <p>
        Sneezles is a Citizen Science project - the science is ready, we just
        need you: the citizens.
      </p>
      <p>
        Hankie - our bespoke app - captures your sneeze and relays it to our
        secure servers. It’s instantly visible in the map above, but the story
        doesn’t stop there!
      </p>
      <p>
        From there, some of the world’s most powerful supercomputers running
        SlikSNOS2000 inspect the contents of your Hankie capture. Your sneeze is
        blended with the finest global dust datasets and eddie modelling, giving
        us an unparalleled insight into the nasal health of our global
        community.
      </p>
      <p>
        We’ve had trouble keeping up with the interest, so are still a little
        way from rolling Hankie out to all our enlisted sneezers. Sign up to our
        waiting list now, to share your sneeze for science!
      </p>

      <v-row align="center">
        <v-col cols="10" offset="1" sm="8" offset-sm="2">
          <v-text-field label="Email Address" />
        </v-col>
      </v-row>

      <v-btn class="mb-8" color="primary">
        I'm ready to Sneeze for Science!
      </v-btn>
    </v-container>

    <SneezlesFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import SneezleMap from "@/components/SneezleMap.vue";
import FAQs from "@/components/FAQs.vue";
import About from "@/components/About.vue";

import SneezlesFooter from "@/SneezlesFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    SneezlesFooter,
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
