import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

//Componentes globales
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseDialog from './components/ui/BaseDialog.vue'
//Estilos globales
import './assets/styles/main.scss';
//Vue mask
import VueTheMask from 'vue-the-mask'
import '@fortawesome/fontawesome-free/css/all.css';


const pinia = createPinia()
const app = createApp(App)


app.use(VueTheMask)
app.use(router)
app.use(pinia)

app.component('base-dialog', BaseDialog)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.mount('#app')