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
        <button id="arrowBack" class="inline"></button>
          <h4 class="inline">Abril</h4>
          <p class="inline">2021</p>
        <b-button id="arrowFront" class="inline"></b-button>
         <div id="selectDate" > 
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
  padding-top: 25px;
  float:right;
  background-color: #6A5ACD;
}
.inline{
  display: inline;
}
#selectDate{
  margin-top: 25px;
  width: 100%;
  float:right;
  position: relative;
  background-color: #FFF9F9;
  height: 300px;
}

#arrowFront, #arrowBack {
  color: black;
  width: 10%;
  height: 5rem;
  border-radius: 0px;
  background-color: transparent;
  background-image: url("./left-arrow.png");
  background-repeat: no-repeat;
  background-size: contain;
  border: 0px;
}
#arrowFront{
 -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  float: right;
}
</style>