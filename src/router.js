import { createWebHistory, createRouter} from 'vue-router'
import MainPanel from "@/components/MainPanel";
import Contact from "@/components/Contact";

const routes = [
    {path: '/', component: MainPanel},
    {path: '/Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
