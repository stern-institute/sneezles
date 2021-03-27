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
        <v-form ref="form">
          <v-text-field
            :rules="emailRules"
            label="Email Address"
            v-model="emailAddress"
          />
        </v-form>
      </v-col>
    </v-row>
    <v-btn
      class="mb-8"
      color="primary"
      @click="signUp"
      :loading="spinSubmitButton"
    >
      I'm ready to Sneeze for Science!
    </v-btn>
    <v-snackbar timeout="2000" color="green" v-model="snackbar" >
      Bless you! Thanks for signing up, we'll be in touch!
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

// Typescript sad-times https://stackoverflow.com/q/52109471/361867
export type VForm = Vue & { validate: () => boolean };

export default Vue.extend({
  name: "GetInvolved",
  data: () => ({
    emailAddress: "",
    spinSubmitButton: false,
    snackbar: false,
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    form(): VForm {
      return this.$refs.form as VForm;
    },
  },
  methods: {
    signUp() {
      if (this.form.validate()) {
        this.spinSubmitButton = true;
        const spinTime = 700;
        setTimeout(() => (this.spinSubmitButton = false), spinTime);
        setTimeout(() => (this.snackbar = true), spinTime);
        fetch(`${process.env.BASE_URL}/signup/${this.emailAddress}`);
      }
    },
  },
});
</script>
