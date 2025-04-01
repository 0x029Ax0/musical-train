import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/css/style.css'

import App from './App.vue'
import router from './router'

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from "@fortawesome/free-solid-svg-icons"
library.add(fas)
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab)
import { far } from "@fortawesome/free-regular-svg-icons"
library.add(far)
import { dom } from "@fortawesome/fontawesome-svg-core"
dom.watch()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
