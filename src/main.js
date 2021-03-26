
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import VueMaterial from 'vue-material'
import VueGoodTablePlugin from 'vue-good-table';

import axios from 'axios'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'vue-good-table/dist/vue-good-table.css'

// Custom css/scss
import "./assets/scss/app.scss";

Vue.use(VueMaterial)
Vue.use(VueGoodTablePlugin)

Vue.config.productionTip = false

Vue.prototype.$api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

new Vue({
  router,
  store,
  mounted: function () {
    if (this.$router.currentRoute.name != 'Login') {
      this.$store.dispatch('refreshToken');
      const that = this;
      this.refreshTimer = setInterval(function () {
        that.$store.dispatch('refreshToken');
      }, 30 * 60 * 1000); // 30 minutes
    }
  },
  updated: function () {
    if (this.$router.currentRoute.name != 'Login') {
      this.$store.dispatch('refreshToken');
    }
  },
  destroyed: function () {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  },
  render: h => h(App)
}).$mount('#app')
