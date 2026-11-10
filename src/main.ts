import './resources/styles/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './app/router/index.ts'
import { setupPiniaConfig } from '@/app/providers/pinia.config.ts'
import { setupTanstackQueryConfig } from '@/app/providers/tanstack-query.config.ts'

const app = createApp(App)

//setup pinia
setupPiniaConfig(app)
//setup tanstack query
setupTanstackQueryConfig(app)

app.use(router)

app.mount('#app')
