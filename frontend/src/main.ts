import './assets/main.css'

import { createApp } from 'vue'
//import ToastService from 'primevue/toastservice'
import PrimeVue from "primevue/config";
import Aura from '@/presets/aura'

import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true,
    pt: Aura
});
//app.use(ToastService)

app.mount('#app')
