import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

//Componentes globales
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
//Estilos globales
import './assets/styles/main.scss';
//Vue mask
import VueTheMask from 'vue-the-mask'


const app = createApp(App)

app.use(VueTheMask)
app.use(router)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.mount('#app')