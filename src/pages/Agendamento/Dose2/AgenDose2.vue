<template>
  <div id="mainDiv">
    <div id="titlePage">
      <h3>Agendamentos do dia</h3>
      <h3>04/05/2021</h3>
    </div>
    <div id="search">
      <b-form-input id="date1" type="date" v-model="date1"></b-form-input>
      <b-form-input id="date2" type="date" v-model="date2"></b-form-input>
      <b-button id="searchBtn"></b-button>
    </div>
    <div id="table">
 
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
#tablePrincipal{
  width: 60%;
  height: 40%;
  padding-top: 30px;
  position: absolute;
  top: 0px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
  background-color: white;
}
#searchBtn{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 30px;
  border: none !important;
  background-color: transparent;
  background-image: url("./pngegg.png");
  background-repeat: repeat-x;
  background-size: contain;
}
</style>