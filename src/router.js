import VueRouter from 'vue-router'
import MainPanel from "@/components/MainPanel";
import Vue from 'vue';
import ContactPanel from "@/components/ContactPanel";
Vue.use(VueRouter)

const routes = [
    {path: '/', component: MainPanel},
    {path: '/contact', component: ContactPanel}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
