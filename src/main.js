import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'


library.add(faSpinner, faCoffee, faJs, faVuejs)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
