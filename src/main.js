import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from "@/router";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(router)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
