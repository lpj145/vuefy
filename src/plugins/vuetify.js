import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        dark: '#172b4d',
        primary: '#5e72e4',
        secondary: '#f4f5f7',
        success: '#2dce89',
        info: '#11cdef',
        warning: '#fb6340',
        error: '#f5365c',
      },
    }
  }
});
