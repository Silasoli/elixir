import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import jsPDF from 'jspdf';
import VCalendar from 'v-calendar';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueMask from 'v-mask';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import 'sweetalert2/dist/sweetalert2.min.css';

// import for routes
import Login from './pages/Login/Login.vue';
import LoginAplicador from './pages/Login/LoginAplicador.vue';
import Home from './pages/Home/Home.vue';
import CadCidadao from './pages/Cadastro/CadCidadao/CadCidadao.vue';
import AgenDose1 from './pages/Agendamento/Dose1/AgenDose1.vue';
import AgenDose2 from './pages/Agendamento/Dose2/AgenDose2.vue';
import listaAgenDose from './pages/Agendamento/ListaAgenDose/ListaAgenDose.vue';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(jsPDF);
Vue.use(VCalendar);
Vue.use(ElementUI);
Vue.use(VueMask);
Vue.use(VueSweetalert2);
Vue.use(VueMaterial);

const routes = [
  { path: '/', component: Login },
  { path: '/LoginAplicador', component: LoginAplicador },
  { path: '/Home', component: Home },
  { path: '/CadCidadao', component: CadCidadao },
  { path: '/AgenDose1', component: AgenDose1 },
  { path: '/AgenDose2', component: AgenDose2 }, 
  { path: '/listaAgenDose', component: listaAgenDose },
];

const router = new VueRouter({
  routes,
  jsPDF
});

new Vue({
  router,
  jsPDF,
  VCalendar,
  ElementUI,
  VueMaterial,
  VueMask,
  VueSweetalert2,
  render: (h) => h(App),
}).$mount('#app');

Vue.config.productionTip = false;
