import { createWebHashHistory, createRouter } from "vue-router"

import chengziUIDoc from './pages/chengziUIDocument.vue'

const history = createWebHashHistory();
export const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: chengziUIDoc
        }
    ]
})
