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

<style scoped>


</style>