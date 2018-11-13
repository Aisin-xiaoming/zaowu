// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'



Vue.config.productionTip = false
import 'lib-flexible/flexible.js'
import '@/common/css/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
