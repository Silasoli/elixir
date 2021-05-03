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
        <div id="selectDate">
          <div id="divDay">
            <button class="days">Domingo</button> 
            <button class="days">Segunda</button> 
            <button class="days">Terça</button> 
            <button class="days">Quarta</button> 
            <button class="days">Quinta</button> 
            <button class="days">Sexta</button>
            <button class="days">Sabado</button> 
          </div>
          <button  v-for="item in 30" :key="item" :id="'selectComponentD'+item" class="selectComponent" @click="selectData(`${item}`)">{{item}}</button> 
        </div> 
            <b-button id="btnSave1" class="saveBtn"    @click="salvar" variant="primary">Salvar</b-button>
      </div>
      <div id="mainDivHorario">
        <div id="header">
          <div id="btnBack">
              <button id="arrowBack" class=""></button>
          </div>  
          <div id="divTitle">
            <h4 class="">Selecione um horario</h4>
          </div> 
           <div id="btnFront">
              <button id="arrowFront" class=""></button>
            </div>
        </div>
        <div id="selectDate">
          <div id="divDay">
           
          </div>
          <div id="hours">
            <button v-for="item in 30" :key="item" :id="'selectComponentH'+item" class="selectComponent" @click="selectHours(`${item}`)">{{item}}</button> 
          </div>
        </div>
            <b-button class="returnBtn"  @click="voltar" variant="primary">Voltar</b-button>
            <b-button id="btnSave1" class="saveBtn"   variant="primary">Salvar</b-button>
      </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        dayFiel: '',
        selected: null,
        options: [
          { value: null, text: 'Selecione um Posto' },
          { value: 1, text: 'Posto 2' },
          { value: 2, text: 'Posto 3' },
          { value: 3, text: 'Posto 4' },
          { value: 4, text: 'Posto 5', disabled: true }
        ],
        form: [

        ]
      }
    },
    methods:{
    //     AgenDose1: function(){
    //         this.form.push({
    //         nome:this.dayFiel,
    //         data:this.selected,
    //         id: this.form.length + 1 });
    //         console.log(this.form)
    // },
    salvar: function(){
        document.getElementById('mainDivHorario').style.display = "block";
        document.getElementById('mainDiv').style.display = "none";
        // var dNow = new Date();
        // var hora =  dNow.getHours() + ':'/
        // var minutos =dNow.setMinutes(dNow.getMinutes());
        // minutos = minutos+(dNow.setMinutes(0));
        // var localdate = hora + minutos;
        // console.log(localdate)
    },
    voltar: function() {
        document.getElementById('mainDivHorario').style.display = "none";
        document.getElementById('mainDiv').style.display = "block";
    },
    selectData:function(id) {
       let btn = document.getElementById('selectComponentD'+id)
      if (btn.classList[0]=="selectComponent") {
            btn.classList.remove('selectComponent');
            btn.classList.add('selectComponentChecked');
      } else if(btn.classList[0]!="selectComponent"){
            btn.classList.remove('selectComponentChecked');
            btn.classList.add('selectComponent');
      }
    },
    selectHours: function(id){
      let btn = document.getElementById('selectComponentH'+id)
      if (btn.classList[0]=="selectComponent") {
            document.getElementById('selectComponentH'+id).classList.remove('selectComponent');
            document.getElementById('selectComponentH'+id).classList.add('selectComponentChecked');
      } else if(btn.classList[0]!="selectComponent"){
            document.getElementById('selectComponentH'+id).classList.remove('selectComponentChecked');
            document.getElementById('selectComponentH'+id).classList.add('selectComponent');
      }
    },
    getbtn: function(a) {
      console.log(a.id)
      // console.log(this.id)
      
    }
  }
 }
</script>

<style>
#selectLocal{
  width: 20%;
  float: right;
  margin-right: 30px;
}
#mainDiv{
  margin-top: 70px;
  width: 900px;
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
  float:right;
  position: relative;
  background-color: #FFF9F9;
  height: 390x;
  padding: 16px;
  padding-left: 18px;
}
.selectComponent{
  width: 110px;
  height: 50px;
  background-color: #CCBD5A;
  margin: 5px;
  position: relative;
  color: black;
  margin-left: 8px;
  border: 0px;
}
.selectComponentChecked{
  width: 110px;
  height: 50px;
  background-color: #F45267;
  margin: 5px;
  position: relative;
  color: black;
  margin-left: 8px;
  border: 0px;
}
.days{
  width: 110px;
  height: 50px;
  margin: 5px;  
  font-weight: bolder;
  border: 0px;
  pointer-events: none;
  margin-left: 8px;
}
#mainDivHorario{
  margin-top: 70px;
  width: 900px;
  padding-top: 30px;
  float:right;
  background-color: #6A5ACD;
  display: none;
}
</style>