import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Add bootstrap version 4.4 CDN
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
