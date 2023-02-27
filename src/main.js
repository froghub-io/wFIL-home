import {createApp} from 'vue'
import '@/assets/scss/style.scss'
import router from './router'
import store from './store'
import App from './App.vue'
import i18n from '@/assets/language/index'


const app = createApp(App);
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
