<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue'
import Footer from './pages/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#body{
  background-color:#E5E5E5;
}
#footer{
  display: none;
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
