import { createApp } from 'vue'
import App from './App.vue'
import './globals.css'
import { pinia } from './plugins/pinia'
import { router } from './plugins/router'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
