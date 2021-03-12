import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#293371',
        secondary: '#718EAA',
        accent: colors.cyan.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.blue.base,
        success: colors.teal.base,
      },
      dark: {
        secondary: colors.blueGrey.lighten4,
        primary: colors.deepPurple.lighten2,
        // info: colors.blue.lighten4,
      },
    },
  },
  icons: {
    iconfont: "md",
  },
});
