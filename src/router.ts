import {createWebHashHistory,createRouter} from 'vue-router'
import Ahong from './components/Ahong.vue'
import Ahong2 from './components/Ahong2.vue'


const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Ahong},
        {path:'/2',component:Ahong2}
    ]
})