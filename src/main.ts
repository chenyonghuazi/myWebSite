import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index'
//引入bootstrap5.2
import './assets/bootstrap5_2/bootstrap.min.css'
import './assets/bootstrap5_2/bootstrap.bundle.min.js'
//引入iconfont
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')


app.config.globalProperties.$lang = window.navigator.language