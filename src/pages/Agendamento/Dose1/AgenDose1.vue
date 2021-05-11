<template>
  <div id="mainDiv2">
      <!-- TELA 1 -->
      <div id="mainDiv">
        <div id="titlePage">
       <h3>Selecione data , posto e horário:</h3>
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
           <v-date-picker class="Data" mode="date" v-model='selectedDate'  :value="null" color="purple" is-dark is-expanded />
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
#titlePage{
  text-align: center;
  width: 100%;
  float: left;
  display: flex;
  flex-wrap: wrap;
  
}
#selectDate{
  width: 120% !important;
}
.selectLocalItem{
  position: relative;
  left: 50%;
  top: 70px;
}

.selectHours{
  position: relative;
  left: 120%;
  top: 28px;
}
#mainDiv{
  width: 50%;
  padding-top: 30px;
  position: relative;
  top: 140px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
}
#btnSave1{
  position: relative;
  top: -100px !important;
 
}



/*Tela de 320*/
@media screen and (min-width:280px){
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
#selectDate{
  
  position: relative;
  left: -38%;
  top: -30px;
  width: 175% !important;
}
.selectLocalItem{
  position: relative;
  left: -30%;
  top: 0px;
  width: 120%;
}

.selectHours{
  position: relative;
  left: -30%;
  top: 298px;
  width: 100%;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -10px !important;
  left: 80%!important;
 
}

}

@media screen and (min-width:768px){
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
#selectDate{
  
  position: relative;
  left: -38%;
  top: -30px;
  width: 175% !important;
}
.selectLocalItem{
  position: relative;
  left: -30%;
  top: 0px;
  width: 50%;
}

.selectHours{
  position: relative;
  left: 70%;
  top: -40px;
  width: 60%;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -10px !important;
  left: 105%!important;
 
}

}

@media screen and (min-width:1281px){
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
#selectDate{
  
  position: relative;
  left: -10%;
  top: -90px;
  width: 125% !important;
}
.selectLocalItem{
  position: relative;
  left: -8%;
  top: 0px;
  width: 40%;
}

.selectHours{
  position: relative;
  left: 74%;
  top: -40px;
  width: 40%;
}
#selectLocal{
  position: relative;
  top: -60px;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -60px !important;
  left: 102%!important;
 
}

}

</style>