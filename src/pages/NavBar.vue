<template>
<div>
  <div>
    <b-navbar id="nav">
      <h1 id="titleNav" href="#">NavBar</h1>
      <b-button id="sideMenu" v-b-toggle.sidebar-right></b-button>
    </b-navbar>
  </div>
  <div>
  <b-sidebar id="sidebar-right" title="Menu"  bg-variant="light" right shadow>
    <div class="px-3 py-2">
      <b-button class="btnSideBar" @click="IrDose1">Agendar Primeira Dose</b-button>
      <b-button class="btnSideBar" @click="IrDose2">Agendar Segunda Dose</b-button>
      <b-button class="btnSideBar" @click="IrCadCidadao">Cadastrar Cidadão</b-button>
      <b-button class="btnSideBar" @click="IrHome">Home</b-button>
    </div>
  </b-sidebar>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar.vue',
  methods:{
     IrCadCidadao: function() {
      window.location.href = "http://localhost:8080/#/cadcidadao";
    },
    IrHome: function() {
      window.location.href = "http://localhost:8080/#/";
    },
    IrDose1: function() {
      window.location.href = "http://localhost:8080/#/agendose1";
    },
    IrDose2: function() {
      window.location.href = "http://localhost:8080/#/agendose2";
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
#sidebar-right{
  
}
.btnSideBar{
  background: #F8F9FA;
  color: black;
  width: 100%;
  border-radius: 0px;
}
</style>