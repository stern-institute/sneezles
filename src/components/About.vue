<template>
  <v-row class="d-flex" align="center">
    <v-col cols="2">
      <v-img src="/Bless%20University.png"></v-img>
      <v-img max-height="400px" src="/Stern%20Institute.png"></v-img>
      <v-img src="/Tes%20Souhaits%20Studio.png"></v-img>
    </v-col>
    <v-col cols="8">
      <p>
        Sternutations! And welcome to Sneezl.es. This is a ground-breaking
        project mapping sneezes in real time, wherever they happen. So often
        suppressed with shame, and handkerchiefs, we haven’t been able to gather
        reliable, real-time data on location and power of sneezing events. But
        that’s all changed! Everyone sneezes. And everyone has a smartphone. The
        answer was obvious!
      </p>
      <p>
        Three years ago we received significant funding to enable us to develop
        this website, and all the amazing functionality you’re about to
        experience. Inspired by the live maps of weather and traffic conditions
        and pandemics that have become a part of our day-to-day lives, we knew
        we had to get on that bandwagon.
      </p>
      <p>
        Sneezing is a response to irritation of the nasal passages, usually
        caused by foreign particles. Now we can track exactly where those
        foreign particles are showing up! As sneezing can also be linked to
        sudden exposure to bright light, falls in temperature or a sudden
        breeze, we are hopeful that these data could also contribute to the
        verification of weather forecasts.
      </p>

      <h3>About the team</h3>

      <p>
        I’m Quentin Saint, Professor of Sternutation and holder of the Fnese
        Chair in Nasal Studies at the Stern Institute. I began my career as a
        medical student but switched to data science, before anyone called it
        that, and realised I had an aptitude for large spreadsheets. In
        parallel, my interests were caught by coughs, sneezes and oedema.
      </p>

      <p>
        As a sneeze expert, the thing I’m most often asked is whether sneezing
        with one’s eyes open causes the eyeballs to fall out. After years of
        thorough experimentation, I’m delighted, and relieved, to confirm that
        the answer is, NO! They’re a bit sore, but they’re still attached.
      </p>
    </v-col>

    <v-col cols="2">
      <v-carousel></v-carousel>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  name: "About",
};
</script>
