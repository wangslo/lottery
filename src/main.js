import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'
import { emoji } from './utils/emoji.js'
import ElementUI from 'element-ui'
import 'jquery'
import VueResource from 'vue-resource'
import {trendInit} from'./utils/trendchart'

Vue.use(VueResource)

Vue.config.productionTip = false
Vue.prototype.emoji = emoji
Vue.prototype.trendInit = trendInit

Vue.use(ElementUI)
Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
