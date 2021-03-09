<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <l-map
      :zoom="zoom"
      :min-zoom="2"
      :max-bounds="[[-90, -180], [90, 180]]"
      :center="center"
      style="height: 500px; width: 100%"
    >

      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-circle
        v-for="circle in circles"
        :key="circle.center.toString()"
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.colour"
      />

    </l-map>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// eslint-disable-next-line no-unused-vars
import { LatLng, latLng} from 'leaflet';
import { LMap, LTileLayer, LCircle } from 'vue2-leaflet'

import points_json from '@/assets/points.json'

interface Circle {
  center: LatLng
  radius: number
  colour: string
}

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    LMap,
    LTileLayer,
    LCircle,
  },
  data: () => ({
    update_rate: 100, // milliseconds between update
    radius_increase_per_second: 1e5,
    max_radius: 5e5,
    new_circles_per_second: 1,
    starting_radius: 2e4,

    zoom: 3,
    center: latLng(30,70),
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

    circles: [] as Array<Circle>,
    points: points_json,
  }),
  methods: {
    progressCircles() {

      // JS-thonic hack - can remove items while iterating
      for (let i = this.circles.length-1; i>0; i--) {
        const circle = this.circles[i]

        circle.radius += this.radius_increase_per_second * this.update_rate / 1000

        if (circle.radius >= this.max_radius){
          this.circles.splice(i, 1)
        }
      }

      if (Math.random() > this.new_circles_per_second * this.update_rate/1000) {
        // new circle
        const i = this.circles.length
        const lat = this.points[i].lat
        const lon = this.points[i].lng
        const z = this.points[i].z

        this.circles.push({
          radius: this.starting_radius,
          center: latLng(lat, lon),
          colour: z > 0 ? 'green' : 'blue',
        })
      }

      setTimeout(this.progressCircles, this.update_rate)
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the entire view has been rendered
      this.progressCircles()
    })
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
