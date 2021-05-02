<template>
  <div>
      <div id="titlePage">
       <h3>Olá, escolha uma data:</h3>
      </div>
      <div id="localDrop">
        <div id="selectLocal">
          <b-form-select v-model="selected" :options="options" size="sm" class="mt-3" valeu=""></b-form-select>
          <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
        </div>
      </div>
      <div id="mainDiv">
        <div id="header">
          <div id="btnBack">
              <button id="arrowBack" class=""></button>
          </div>  
          <div id="divTitle">
            <h4 class="">Abril</h4>
            <p class="">2021</p>  
          </div> 
           <div id="btnFront">
              <button id="arrowFront" class=""></button>
            </div>
        </div>
        <div id="selectDate" >
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
          <button id="selectComponent"></button> 
        </div>  
      </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Selecione um Posto' },
          { value: 1, text: 'Posto 2' },
          { value: 2, text: 'Posto 3' },
          { value: 3, text: 'Posto 4' },
          { value: 4, text: 'Posto 5', disabled: true }
        ]
      }
    }
  }
</script>

<style>
#selectLocal{
  width: 25%;
  float: right;
  margin-right: 30px;
}
#mainDiv{
  margin-top: 70px;
  width: 50%;
  padding-top: 30px;
  float:right;
  background-color: #6A5ACD;
}
#arrowBack {
  width: 15%;
  background-color: transparent;
  background-image: url("./left-arrow.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  border: 0px;
  float: left;
}
#arrowFront{
 -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  background-color: transparent;
  background-image: url("./left-arrow.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 15%;
  height: 40px;
  border: 0px;
  float: right;
}
#divTitle{
  text-align: center;
  width: 70%;
  float: left;
}
#header{
  height: 60px;
  padding-left: 20px;
  padding-right: 20px; 
}
#selectDate{
  width: 100%;
  float:right;
  position: relative;
  background-color: #FFF9F9;
  height: 70%;
  padding: 10px;
}
#selectComponent{
  width: 100px;
  height: 50px;
  background-color: black;
  margin: 5px;
}
</style>