<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-expansion-panels focusable>
      <v-expansion-panel>
        <v-expansion-panel-header> 1. What is this? </v-expansion-panel-header>
        <v-expansion-panel-content>
          Good question!
          <a href="http://www.sneezl.es">Sneezl.es</a> is the flagship output of
          a three year research and innovation effort between international
          partners. After this painstaking work, we are ready to present
          Sneezles as the next generation in sneeze tracking.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          2. Why are there sneezes in the ocean?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Good question!
          <a
            href="https://www.un.org/sustainabledevelopment/wp-content/uploads/2017/05/Ocean-fact-sheet-package.pdf"
            >https://www.un.org/sustainabledevelopment/wp-content/uploads/2017/05/Ocean-fact-sheet-package.pdf</a
          >
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          3. When I select “live data feed”, why do the circles go away?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Good question! If you select “live data” you will be limited to only
          seeing the data that’s appearing through the live feed. Data are
          sparse, that’s why we need a model or you won’t see anything. We
          collected a load of data when we were putting this together. Email us
          when you sneeze!
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          4. Why is SlikSNOS2000 the best choice for sneeze modelling?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Good question! It is a state-of-the-art machine-learned system,
          meaning we can leverage the sparse data to generate much more data,
          and statistics.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header> 5. What's next? </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            Good question! This high performance simulation is just the tip of
            our Citizen Science iceberg. We’re already looking ahead to our
            “Face-Cast” Puffy-Face® atmospheric-pressure tracking initiative,
            which will use facial recognition like never before.
          </p>
          <p>
            We need <em>your</em> sneezes to help prove that people can’t wait
            to give their bodies to science.
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          5. Do you have an API?
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Good question! Yes! Talk to our sneez-sales team for a tour of our
          groundbreaking SaaS technology, whether you want to use our product
          with your own data, or not.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script lang="ts">
export default {
  name: "FAQs",
};
</script>

<style scoped>
.v-expansion-panel-content {
  margin-top: 20px;
}
.v-expansion-panel-header--active {
  background-color: #5f77bb;
  color: #e5e8e9;
}
</style>
