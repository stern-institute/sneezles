<template>
  <v-footer>
    <v-spacer />
    <span> &copy;2021 - Quentin Saint </span>
    <a href="https://twitter.com/SneezlesProject">
      <svg-icon color="#1da1f2" type="mdi" :path="mdiTwitter" />
    </a>
    <a href="mailto:hotmail@sneezl.es">
      <svg-icon type="mdi" :path="mdiEmail" />
    </a>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <a
          v-bind="attrs"
          v-on="on"
          href="https://www.websitecarbon.com/website/sneezl-es/"
        >
          <svg-icon color="black" type="mdi" :path="mdiMoleculeCo2" />
        </a>
      </template>
      WebsiteCarbon says: Only 0.43 g of CO<sub>2</sub> is produced every time
      someone visits this web page.
    </v-tooltip>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <svg-icon color="#c4302b" type="mdi" :path="mdiYoutube" />
    </a>
    <a href="https://github.com/stern-institute/sneezles">
      <svg-icon color="black" type="mdi" :path="mdiGithub" />
    </a>
    <v-spacer />
  </v-footer>
</template>

<script lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiEmail,
  mdiGithub,
  mdiMoleculeCo2,
  mdiTwitter,
  mdiYoutube,
} from "@mdi/js";

export default {
  name: "SneezlesFooter",
  components: { SvgIcon },
  data: () => ({
    mdiEmail,
    mdiGithub,
    mdiMoleculeCo2,
    mdiTwitter,
    mdiYoutube,
  }),
};
</script>

<style>
footer * {
  margin-left: 3px;
}
</style>
