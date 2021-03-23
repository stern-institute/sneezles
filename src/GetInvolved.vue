<template>
  <div>
    <v-row>
      <v-col cols="12" md="8" offset-md="2" class="pa-4">
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
          From there, some of the world’s most powerful computers run
          SlikSNOS2000 at GigaFLOPS speed to inspect the contents of your Hankie
          capture. Your sneeze is blended with the finest global dust datasets
          and eddie modelling, giving us an unparalleled insight into the nasal
          health of our global community.
        </p>
        <p>
          We’ve had trouble keeping up with the interest, so are still a little
          way from rolling Hankie out to all our enlisted sneezers. Sign up to
          our waiting list now, to share your sneeze for science!
        </p>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="10" offset="1" sm="8" offset-sm="2">
        <v-text-field label="Email Address" />
      </v-col>
    </v-row>
    <v-btn class="mb-8" color="primary">
      I'm ready to Sneeze for Science!
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: "GetInvolved",
};
</script>
