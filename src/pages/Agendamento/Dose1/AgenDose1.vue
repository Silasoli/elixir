<template>
  <div>
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
  top: 40px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
}
.saveBtn{
   float: right;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
</style>