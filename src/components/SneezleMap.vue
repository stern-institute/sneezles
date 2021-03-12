<template>
  <div>
    <l-map
      :zoom="zoom"
      :min-zoom="2"
      :max-bounds="[
        [-90, -180],
        [90, 180],
      ]"
      :options="{ zoomControl: false }"
      :center="center"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer :url="url" :attribution="attribution" />

      <l-circle
        v-for="circle in circlesToShow"
        :key="circle.point_index"
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.colour"
      />
    </l-map>

    <v-row class="d-flex mt-2" align="center">
      <div class="flex-grow-1"></div>
      <v-btn
        :color="!showLiveData ? 'primary' : 'secondary'"
        :outlined="!showLiveData"
        text
        @click="showLiveData = false"
        class="mr-3"
      >
        Simulation
      </v-btn>

      <v-switch v-model="showLiveData" />

      <v-btn
        :color="showLiveData ? 'primary' : 'secondary'"
        :outlined="showLiveData"
        text
        @click="showLiveData = true"
        class="ml-3"
      >
        Live Data
      </v-btn>
      <div class="flex-grow-1"></div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LCircle, LMap, LTileLayer } from "vue2-leaflet";
// eslint-disable-next-line no-unused-vars
import { LatLng, latLng } from "leaflet";
import points_json from "@/assets/points.json";

interface Circle {
  center: LatLng;
  radius: number;
  colour: string;
  point_index: number;
}

export default Vue.extend({
  name: "SneezleMap",
  components: {
    LMap,
    LTileLayer,
    LCircle,
  },
  data: () => ({
    showLiveData: false,

    update_rate: 100, // milliseconds between update
    radius_increase_per_second: 1e5,
    max_radius: 5e5,
    new_circles_per_second: 1,
    starting_radius: 2e4,

    zoom: 3,
    center: latLng(30, 70),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

    circles: [] as Array<Circle>,
    points: [] as Array<PointsJson>,
  }),

  computed: {
    circlesToShow(): Array<Circle> {
      if (!this.showLiveData) {
        return this.circles;
      } else {
        return [];
      }
    },
  },
  methods: {
    progressCircles() {
      // JS-thonic hack - can remove items while iterating
      for (let i = this.circles.length - 1; i > 0; i--) {
        const circle = this.circles[i];

        circle.radius +=
          (this.radius_increase_per_second * this.update_rate) / 1000;

        if (circle.radius >= this.max_radius) {
          this.circles.splice(i, 1);
        }
      }

      if (
        Math.random() >
        (this.new_circles_per_second * this.update_rate) / 1000
      ) {
        // new circle

        if (this.points.length === 0) {
          this.points = [...points_json];
        }

        const i = Math.floor(Math.random() * this.points.length);
        const point = this.points[i];
        this.points.splice(i, 1); // Remove point, so we don't reuse

        if (!this.circles.map((c) => c.point_index).includes(i)) {
          // Keep point_index unique
          this.circles.push({
            radius: this.starting_radius,
            center: latLng(point.lat, point.lng),
            colour: point.z > 0 ? "green" : "blue",
            point_index: i,
          });
        }
      }

      setTimeout(this.progressCircles, this.update_rate);
    },
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the entire view has been rendered
      this.progressCircles();
    });
  },
});
</script>
