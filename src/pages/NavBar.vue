<template>
<div>
  <div>
    <b-navbar id="nav">
    
      <div id="logo"></div>
      <b-button v-if="id!='null'" id="sideMenu" v-b-toggle.sidebar-right></b-button>
      <b-button v-if="id!='null'" id="logout" @click="destruirSessao"></b-button>
    </b-navbar>
  </div>
  <div>
  <b-sidebar id="sidebar-right" title="Menu"  bg-variant="light" right shadow>
    <div class="px-3 py-2">
      <b-button v-if="tipoDeUsuario=='cidadao'" class="btnSideBar" @click="IrHome">Home</b-button>
      <b-button v-if="tipoDeUsuario=='cidadao'" class="btnSideBar" @click="IrDose1">Agendar Primeira Dose</b-button>
      <b-button v-if="tipoDeUsuario==='aplicador'" class="btnSideBar" @click="IrDose2">Atendimentos 1º Dose</b-button>
      <b-button v-if="tipoDeUsuario==='aplicador'" class="btnSideBar" @click="listaagendose">Atendimentos 2º Dose</b-button>
    </div>
  </b-sidebar>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar.vue',
   mounted() {
      this.hiddenBtn();
    },
   data() {
        return{
             tipoDeUsuario: localStorage.getItem('tipoUsuario'),
             id: localStorage.getItem('cId'),
      }
   },
  methods:{
    IrHome: function() {
      window.location.href = "http://localhost:8080/#/home";
    },
    IrDose1: function() {
      window.location.href = "http://localhost:8080/#/agendose1";
    },
    IrDose2: function() {
      window.location.href = "http://localhost:8080/#/agendose2";
    },
    listaagendose: function() {
      window.location.href = "http://localhost:8080/#/listaagendose";
    },
    destruirSessao: function(){
       localStorage.clear();
       window.location.href = "http://localhost:8080/#/";
       document.location.reload(true);
    },
    hiddenBtn: function(){
      const Id = localStorage.getItem('cId');
      if (Id === null) {
        document.getElementById('sideMenu').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
      }else{
        document.getElementById('sideMenu').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
      }
    }
}
}
    
</script>

<style scoped>
#nav{
  background-color: #6A5ACD !important;
  height: 70px;
  font-weight: bolder; 
  text-align: center !important;
  background-image:url("../assets/elixirlogo.png");
  background-size: 13.1%;
  background-position: left;
  background-position-x: -20px;
  background-repeat: no-repeat;
  
}

#sideMenu{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 30px;
  border: none !important;
  background-color: transparent;
  background-image: url("../assets/menu-icon-19353.png");
  background-repeat: repeat-x;
  background-size: contain;
}

#logout{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 100px;
  border: none !important;
  background-color: transparent;
  background-image: url("../assets/logout.png");
  background-repeat: repeat-x;
  background-size: contain;
}
.btnSideBar{
  background: #F8F9FA;
  color: black;
  width: 100%;
  border-radius: 0px;
}
#titleNav{
  margin-top: 10px;
  
}
</style>