<template>
  <div>
      <!-- TELA 1 -->
      <div id="mainDiv">
        <div id="titlePage">
       <h3>Olá, escolha uma data:</h3>
      </div>
      <div id="localDrop">
        <div id="selectLocal">
          <b-form-select v-model="selected" :options="options" size="sm " class="mt-3" valeu=""></b-form-select>
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
            <h4 class="title">Selecione um horario:</h4>
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
            <el-time-select class="selectHour" readonly v-model="value12" 
            @focus="gethour('11:15')"></el-time-select>
             <el-time-select class="selectHour" readonly v-model="value13" 
            @focus="gethour('11:30')"></el-time-select>
             <el-time-select class="selectHour" readonly v-model="value14" 
            @focus="gethour('11:45')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value15" 
            @focus="gethour('12:00')"></el-time-select>
            <el-time-select class="selectHour" readonly v-model="value16" 
            @focus="gethour('12:15')"></el-time-select>
             
          </div>
        </div>
            <b-button class="returnBtn" id="returnBtn"  @click="voltar" variant="primary">Voltar</b-button>
            <b-button id="btnSave2" class="saveBtn"   variant="primary">Salvar</b-button>
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
        value13:'11:30',
        value14:'11:45',
        value15:'12:00',
        value16:'12:15',
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

*{
  box-sizing: border-box;
}
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
/*Tela de 320*/
@media(min-width:320px){
    div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}
div#selectLocal{
  position: relative;
  top: 200px;
  left: -70px;
  width: 100%;
 
}
div#selectDate{
  position: relative;
  top: -130px;
  left: -55px;
  margin: 10px;
  width: 190px;
}
#btnSave1{
  position: relative !important;
  top: -140px;
  left: 40px !important;
 
}
/*Tela 2 responsiva 320px*/
 
div#hours{
  position: relative;
  top:10px ;
  left: 10px;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-column-gap: 5px ;
  margin: 10px;
  width: 240px;
 }
 .selectHour{
   width: 105px !important;
   margin: 10px  !important;
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -130px;
  margin-bottom: 10px  !important;

}
#returnBtn{
  position: relative !important;
  top: -130px !important;
  margin-bottom: 10px  !important;
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
  top: -120px;
  left: -30px;
  margin: 10px;
  width: 200px;
}
#btnSave1{
  position: relative;
  top: -120px;
 left: 70px;
}
/*Tela 2 responsiva 375px*/
 
div#hours{
  position: relative;
  top:0px ;
  left: 10px;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-column-gap: 5px ;
  margin: 10px;
  width: 240px;
 }
 .selectHour{
   width: 105px !important;
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
  margin: 10px  !important;

}
#returnBtn{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
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
div#selectDate{
  position: relative;
  top: -120px;
  left: -24px;
  margin: 10px;
  width: 190px;
}
#btnSave1{
  position: relative;
  top: -120px;
 left: 70px;
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
  width: 50%;
 
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
  left: 40px !important;
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
  grid-row-gap: 0px;
  margin: 10px;
  width: 500px;
 }
 .selectHour{
   width: 105px !important;
   margin: 0px 0px 0px 20px  !important;
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -120px;
  margin: 10px  !important;

}
#returnBtn{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
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
  left: 150px;
  width: 50%;
 
}
div#selectDate{
  position: relative;
  top: -130px;
  left: -70px;
  margin: 10px;
  width: 700px;
}
#btnSave1{
  position: relative !important;
  top: -140px;
  left: 40px !important;
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
   width: 105px !important;
   margin: 0px 0px 0px 50px  !important;
   
 }
 div#divTitle{
   position: relative;
   top: -150px;
  text-align: center; 
}
#btnSave2{
  position: relative !important;
  top: -120px;
  left: -40px;
  margin: 10px  !important;

}
#returnBtn{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}

}
/*Tela de 1440*/
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
  left: 150px;
  width: 50%;
 
}
div#selectDate{
  position: relative;
  top: -130px;
  left: -70px;
  margin: 10px;
  width: 800px;
}
#btnSave1{
  position: relative !important;
  top: -140px;
  left: 40px !important;
}
/*Tela 2 responsiva 1440*/
 
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
   width: 105px !important;
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
  top: -120px;
  left: -40px;
  margin: 10px  !important;

}
#returnBtn{
  position: relative !important;
  top: -120px !important;
  margin-bottom: 30px  !important;
  
}

}

</style>