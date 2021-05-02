<template>
<div>
  <div>
    <b-navbar id="nav">
      <h1 id="titleNav" href="#">Elixir</h1>
      <b-button id="sideMenu" v-b-toggle.sidebar-right></b-button>
    </b-navbar>
  </div>
  <div>
  <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
    <div class="px-3 py-2">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </div>
  </b-sidebar>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar.vue',
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
</style>