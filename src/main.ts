import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from "./router"
import './assets/css/normalize.min.css'
const app = createApp(App)
app.use(router)
app.mount('#app')
// new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// })