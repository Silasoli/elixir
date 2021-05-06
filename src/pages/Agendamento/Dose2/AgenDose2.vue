<template>
  <div id="mainDiv">
    <div id="titlePage">
      <h3 id="title">Agendamentos do dia</h3>
      <h3 id="dataDoDia">05/05/2021</h3>
    </div>
    <div id="filtro">
        <div id="filtro2">
            <div id="searchDiv">
              <b-button id="searchBtn"></b-button>
            </div>
      </div>
      <div id="filtroInicio">
          <label for="">Fim</label>
          <b-form-input class="date" id="date1" type="date" v-model="date1"></b-form-input>
      </div>
      <div id="filtroFim">
          <label for="">Inicio</label>
          <b-form-input class="date" id="date2" type="date" v-model="date2"></b-form-input>
      </div>
    </div>
    <div id="table">
      <!-- <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text"> -->
      <button></button>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['Horário', 'Nome_Completo', 'CPF','Dose','Vacina','Checked','_2º_Dose'],
        items: [
          { 
            Horário: '10:15', 
            Nome_Completo: 'Daenerys Targaryen', 
            CPF: '554.753.790-09', 
            Dose: '1º Dose',
            Vacina:'Astrazeneca',
            Checked:'',
            _2º_Dose:'Pendente ', 
          },
          { 
            Horário: '10:30', 
            Nome_Completo: 'Jon Snow', 
            CPF: '730.026.910-97', 
            Dose: '1º Dose',
            Vacina:'CoronaVac',
            Checked:'',
            _2º_Dose:'Pendente ',  
          },
          { 
            Horário: '10:45', 
            Nome_Completo: 'Arya Stark', 
            CPF: '916.551.380-06', 
            Dose: '1º Dose',
            Vacina:'Astrazeneca',
            Checked:'',
            _2º_Dose:'Pendente ',  
          },
          { 
            Horário: '11:00', 
            Nome_Completo: 'Sansa Stark', 
            CPF: '213.359.600-31', 
            Dose: '1º Dose',
            Vacina:'CoronaVac',
            Checked:'',
            _2º_Dose:'Pendente ',  
          }
        ]
      }
    }
  }
</script>

<style>
#mainDiv{
  width: 60%;
  height: 40%;
  padding-top: 30px;
  position: absolute;
  top: -180px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  /* background-color: white; */
}
#searchBtn{
  margin-top: 17px;
  width: 40px;
  height: 40px;
  position: relative;
  /* bottom:0px; */
  border: none !important;
  background-color: transparent;
  background-image: url("./pngegg.png");
  background-repeat: repeat-x;
  background-size: contain;
}
#filtroInicio{
  width: 26%;
  display: inline;
  float: right;
  padding: 5px;
  margin: 10px;
}
#filtroFim{
  width: 26%;
  display: inline;
  float: right;
  padding: 5px;
  margin: 10px;
}
#filtro2{
  width: 5%;
  display: inline;
  float: right;
  padding: 5px;
  margin: 10px;
}
#searchDiv{
  width: 26%;
  display: inline;
  float: right;
  padding: 5px;
  margin: 10px;
}
#filtro{
  width: 100%;
}
#title{
  float: left;
}
#dataDoDia{
  position: absolute;
  right: 0px;
}
#titlePage{
  margin-bottom: 40px;
}
#table{
  display: inline;
  background-color: black;
}
</style>