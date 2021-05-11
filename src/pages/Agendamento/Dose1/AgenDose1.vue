<template>
  <div id="mainDiv2">
      <!-- TELA 1 -->
      <div id="mainDiv">
        <div id="titlePage">
       <h3>Preencha o formulário abaixo:</h3>
      </div>
      <div>
      </div>
      <div id="localDrop">
        <div id="selectLocal">
          <el-select class="selectLocalItem" v-model="value" placeholder="Selecione um local">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div>
           <el-time-select class="selectHours" placeholder="Selecione um Horário" v-model="horaSelecionada" :picker-options="{  start: '08:30', step: '00:15', end: '18:30'}"></el-time-select>
          </div>
        </div>
      </div>
        <div id="selectDate">
           <v-date-picker mode="date" v-model='selectedDate'  :value="null" color="purple" is-dark is-expanded />
        </div> 
            <b-button id="btnSave1" class="saveBtn"    @click="salvar" variant="primary">Salvar</b-button>
      </div>
  </div>
</template>

<script>

 export default {
     components: {
  },
    data() {
      return {
        horaSelecionada: '',
        selectedDate:'',
        dayFiel: '',
        value: '',
         options: [{
          value: 'Posto 1',
          label: 'Posto 1'
        }, {
          value: 'Posto 2',
          label: 'Posto 2',
        }, {
          value: 'Posto 3',
          label: 'Posto 3'
        }, {
          value: 'Posto 4',
          label: 'Posto 4'
        }, {
          value: 'Posto 5',
          label: 'Posto 5'
        }],
        dataAgen1: [

        ]
      }
    },
    methods:{
        salvar: function(){
          const ddata = this.selectedDate;
          const data2 =  ddata.toString().substring(0, 15)
            this.dataAgen1.push({
            hora:this.horaSelecionada,
            data: data2,
            local:this.value,
            id: this.dataAgen1.length + 1 });
            console.log(this.dataAgen1)
        },
        traduDate: function(){
          
        }
  }
 }
</script>

<style scoped>

*{
  box-sizing: border-box;
}
#mainDiv2{
  width: 100%;
  overflow-x:hidden !important;
  background-color:#E5E5E5 !important;
  height:110vh !important;
}
/* Style TELA 1 */
#selectLocal{
  width: 100%;
  margin-top: 30px;
}
.selectLocalItem{
  width: 40%;
  float: right;
}
.selectHours{
  width: 40% !important;
  margin-bottom: 30px;
  float: left;
}
#mainDiv{
  width: 50%;
  padding-top: 30px;
  position: relative;
  top: 140px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  
}
/* style TELA 2 */
#divTitle{
  text-align: center;
  width: 100%;
  float: left;
}
#mainDivHorario{
  position: absolute;
  top: 140px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
}
/*Tela de 320*/
@media(min-width:320px){
  #mainDiv2{
  background-color:#E5E5E5 !important;
  max-height:260% !important;
  overflow-x:hidden !important;
}

    div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}
div#selectLocal{
  position: relative;
  top: 200px;
  left: -50px;
  width: 100%;
 
}
#selectDate{
  position: relative;
  top: -130px;
  left: -69.7px;
  margin: 10px;
  width: 150%;
}
#Date2{
  width: 120% !important;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -130px;
  left: 86%!important;
 
}
/*Tela 2 responsiva 320px*/

div#hours{
  position: relative;
  top:10px ;
  left: 30px;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-column-gap: 5px ;
  margin: 10px;
  width: 240px;
 
 }
 .selectHour{
   width: 110px !important;
   margin: 10px  !important;
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -120px;
   background-color: #F45267 !important;
   left: 70px;
 

}
#returnBtn1{
  position: relative ;
  top: -120px ;
   background-color: #F45267 !important;
 
}
#complet{
  z-index: -1;
  position: relative;
  top: -275px;
  left: -100px;
  width: 185.2%;
  background-color: #E5E5E5;
  height: 51vh;
}

}
/*Tela de 375*/
@media(min-width:375px) {
 
div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}

div#selectLocal{
  position: relative;
  top: 220px;
  left: -70px;
  width: 100%;
}
div#selectDate{
  position: relative;
  top: -110px;
  left: -50%;
  margin: 10px;
  width: 176%;
}
#Date2{
  position: relative;
  left: 5%;
  width: 100% !important;
}
#btnSave1{
  position: relative;
  top: -113px;
  left: 180px !important;
}
/*Tela 2 responsiva 375px*/
 
div#hours{
  position: relative;
  top:-20px ;
  left: 20%;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-column-gap: 20px ;
  margin: 10px;
  width: 260px;
 }
 .selectHour{
   width: 108px !important;
   margin: 10px  !important;
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -135px;
  left: 90px;
  margin: 10px  !important;

}
#returnBtn1{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}
#complet{
 
  position: relative;
  top: -294.8px;
  left: -100px;
  width: 177.5%;
  background-color: #E5E5E5;
  height: 50vh;
}

}
/*Tela de 425*/
@media(min-width:425px){
  div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}

div#selectLocal{
  position: relative;
  top: 220px;
  left: -70px;
  width: 100%;
}
#Date2{
 width: 100% !important;
  position: relative;
  top: -20px;
  left: 4.1%;
  margin: 0px;
}

#btnSave1{
  position: relative;
  top: -115px;
 left: 100% !important;
}
/*Tela 2 responsiva 425*/
 
div#hours{
  position: relative;
  top:-20px ;
  left: 20%;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-column-gap: 20px ;
  margin: 10px;
  width: 280px;
 }
 .selectHour{
   width: 115px !important;
   margin: 10px  !important;
   font-size: 13pt;
   
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -135px;
  left: 90px;
  margin: 10px  !important;

}
#returnBtn1{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}
#complet{
 
  position: relative;
  top: -286.8px;
  left: -100px;
  width: 172%;
  background-color: #E5E5E5;
  height: 52vh;
}

}
/*Tela de 768*/
@media(min-width:768px){

 div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}
div#selectLocal{
  position: relative;
  top: 200px;
  left: -210px;
  width: 60%;
 
}
div#selectDate{
  position: relative;
  top: -130px;
  left: -70px;
  margin: 10px;
  width: 500px;
}
#btnSave1{
  position: relative !important;
  top: -140px;
  left: 330px !important;
}
/*Tela 2 responsiva 768*/
 
div#hours{
  position: relative;
  top:0px ;
  left: 35px;
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 50px 50px 50px ;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  margin: 0px;
  width: 500px;
 }
 .selectHour{
   width: 115px !important;
   margin: 0px 0px 0px 15px  !important;
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -135px;
  left: 300px;
  margin: 10px  !important;

}
#returnBtn1{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}
#complet{
 
  position: relative;
  top: -284.8px;
  left: -153px;
  width: 166%;
  background-color: #E5E5E5;
  height: 52vh;
}

}
/*Tela de 1024*/
@media(min-width:1024px){

 div#titlePage  {
    text-align: left;
    position: absolute;
    top: -125px ;
    left: -150px;
}
div#selectLocal{
  position: relative;
  top: -170px;
  left: 100px;
  width: 50%;       
 
}
  #Date2{
  position: relative;
  top: -40px;
  left: -70px;
  margin: 10px;
  width: 770px !important;
}
#btnSave1{
  position: relative !important;
  top: -150px;
  left: 500px !important;
}
/*Tela 2 responsiva 1024*/
 
div#hours{
  position: relative;
  top:0px ;
  left: 35px;
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 50px 50px 50px ;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin: 10px;
  width: 600px;
  
 }
 .selectHour{
   width: 117px !important;
   margin: 0px 0px 0px 50px  !important;
   
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -135px;
  left: 420px;
  margin: 10px  !important;

}
#returnBtn1{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}
#complet{
 
  position: relative;
  top: -284.8px;
  left: -100px;
  width: 143%;
  background-color: #E5E5E5;
  height: 53vh;
}
}
/*Tela de 1281*/
@media(min-width:1281px){

 div#titlePage  {
    text-align: left;
    position: absolute;
    top: -125px ;
    left: -150px;
}
div#selectLocal{
  position: relative;
  top: -170px;
  left: 70px;
  width: 50%;
 
}
 #Date2{
  position: relative;
  top: -40px;
  left: -70px;
  margin: 10px;
  width: 180% !important;
}
#btnSave1{
  position: relative !important;
  top: -180px;
  left: 650px !important;
  padding: 10px;
  font-size: 14pt;
}
/*Tela 2 responsiva 1281*/
 
div#hours{
  position: relative;
  top:0px ;
  left: 35px;
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px ;
  grid-template-rows: 50px 50px 50px 50px ;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin: 10px;
  width: 880px;
  
 }
 .selectHour{
   width: 125px !important;
   margin: 0px 0px 0px 50px  !important;
   align-self: flex-start;
   
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -135.3px;
  left: 690px;
  margin: 10px  !important;

}
#returnBtn1{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}

}

</style>