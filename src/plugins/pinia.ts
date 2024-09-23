import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// https://github.com/vuejs/pinia
const pinia = createPinia()
// https://github.com/prazdevs/pinia-plugin-persistedstate
pinia.use(piniaPluginPersistedstate)

export { pinia }
