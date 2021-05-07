<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    
  </div>
</template>

<script>
import NavBar from './pages/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    
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
