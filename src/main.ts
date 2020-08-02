import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Ahong from './components/Ahong.vue'
import Ahong2 from './components/Ahong2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Ahong},
        {path:'/2',component:Ahong2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')