<template>
  <div id="app">
    <NavBar></NavBar>
    <CadCidadao></CadCidadao>
    <Footer></Footer>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import CadCidadao from './components/CadCidadao'

export default {
  name: 'App',
  components: {
    CadCidadao,
    NavBar,
    Footer
  }
}
</script>

<style>
#body{
  background-color:#E5E5E5;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #E5E5E5;
  color: #2c3e50; */
}

</style>
