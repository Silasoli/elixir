import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import jsPDF from 'jspdf';
import VCalendar from 'v-calendar';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(jsPDF)
Vue.use(VCalendar)
Vue.use(ElementUI);


//import for routes
import Home from './pages/Home/Home.vue'
import CadCidadao from './pages/Cadastro/CadCidadao/CadCidadao.vue'
import AgenDose1 from './pages/Agendamento/Dose1/AgenDose1.vue'
import AgenDose2 from './pages/Agendamento/Dose2/AgenDose2.vue'


const routes = [
  { path:'/', component: Home},
  { path:'/CadCidadao', component: CadCidadao},
  { path:'/AgenDose1', component: AgenDose1},
  { path:'/AgenDose2', component: AgenDose2},

]

const router = new VueRouter({
  routes  
})

new Vue({
  router,
  jsPDF,
  VCalendar,
  ElementUI,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false
