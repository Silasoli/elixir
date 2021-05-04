<template>
  <div>
      <!-- TELA 1 -->
      <div id="mainDiv">
        <div id="titlePage">
       <h3>Olá, escolha uma data:</h3>
      </div>
      <div id="localDrop">
        <div id="selectLocal">
          <b-form-select v-model="selected" :options="options" size="sm" class="mt-3" valeu=""></b-form-select>
          <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
        </div>
      </div>
        <div id="selectDate">
           <v-date-picker v-model='selectedDate'  :value="null" color="purple" is-dark is-expanded @dayclick="getday"/>
        </div> 
            <b-button id="btnSave1" class="saveBtn"    @click="salvar" variant="primary">Salvar</b-button>
      </div>
      <!-- TELA 2 -->
      <div id="mainDivHorario">
        <div id="header"> 
          <div id="divTitle">
            <h4 class="">Selecione um horario</h4>
          </div> 
        </div>
        <div id="selectDate">
          <div id="divDay">
           
          </div>
          <div id="hours">
            <!-- <button v-for="item in 30" :key="item" :id="'selectComponentH'+item" class="selectComponent" @click="selectHours(`${item}`)">{{item}}</button>  -->
            <el-time-select class="selectHour" readonly v-model="value1" id="oi" @focus="gethour('8:30');"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value2" @focus="gethour('8:45')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value3" @focus="gethour('9:00')"></el-time-select> 
            <el-time-select class="selectHour" readonly v-model="value5" @focus="gethour('9:15')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value5" @focus="gethour('9:30')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value6" @focus="gethour('9:45')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value7" @focus="gethour('10:00')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value8" @focus="gethour('10:15')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value9" @focus="gethour('10:30')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value10" @focus="gethour('10:45')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value11" @focus="gethour('11:00')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value12" @focus="gethour('11:15')"></el-time-select>
          </div>
        </div>
            <b-button class="returnBtn"  @click="voltar" variant="primary">Voltar</b-button>
            <b-button id="btnSave1" class="saveBtn"   variant="primary">Salvar</b-button>
      </div>
  </div>
</template>

<script>

 export default {
     components: {
  },
    data() {
      return {
        value1:'8:30',
        value2:'8:45',
        value3:'9:00',
        value4:'9:15',
        value5:'9:30',
        value6:'9:45',
        value7:'10:00',
        value8:'10:15',
        value9:'10:30',
        value10:'10:45',
        value11:'11:00',
        value12:'11:15',
        // value13:'11:15',
        // value14:'11:30',
        // value15:'11:45',
        // value16:'12:00',
        // value17:'12:15',
        // value18:'12:30',
        // value19:'12:45',
        // value20:'13:00',
        // value21:'13:15',
        // value22:'13:30',
        // value23:'13:45',
        // value24:'14:00',
        // value25:'14:15',
        // value26:'14:30',
        // value27:'14:45',
        // value28:'15:00',
        // value29:'15:15',
        // value30:'15:30',
        // value31:'15:45',
        // value32:'16:00',
        // value33:'16:15',
        // value34:'16:30',
        // value35:'16:45',
        // value36:'17:00',
        dayFiel: '',
        selected: null,
        selectedDate: null,
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
    },
    voltar: function() {
        document.getElementById('mainDivHorario').style.display = "none";
        document.getElementById('mainDiv').style.display = "block";
    },
    selectHours: function(id){
      let btn = document.getElementById(id)
      if (btn.style.backgroundColor!="#F45267") {
          btn.style.backgroundColor="#F45267";
      } else if(btn.style.backgroundColor=="#F45267"){
          console.log('oi')
          btn.style.backgroundColor="#E5E5E5"; 
      }
    },
    // getday: function(){
    //   //  this.form.push({
    //   //       data:this.selected,
    //   //       day:this.selectedDate,
    //   //       id: this.form.length + 1 });
    // },
    gethour: function(value){
        this.form.push({
          hora:value,
            data:this.selected,
            day:this.selectedDate,
            id: this.form.length + 1 });
            console.log(this.form)
    },
  }
 }
</script>

<style>
/* Style TELA 1 */
#selectLocal{
  width: 23%;
  float: right;
  padding-top: 20px;
  padding-bottom: 20px;
  /* margin-right: 30px; */
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
  margin-top: 70px;
  width: 60%;
  height: 42%;
  padding-top: 30px;
  display: none;
 
}
.selectHour{
  width: 22% !important;
  padding: 5px;
  margin-left: 15px;
}
#hours{
  background-color:white;
  border-color: #6A5ACD !important;
  border: solid;
  border-radius: 5px;
  height: 40%;
  padding: 5px;

}
</style>