<template>
  <div>
    <div  id="mainDiv">
        <div id="titlePage">
      <h3 id="title">Agendamentos do dia</h3>
      <h3 id="dataDoDia">06/05/2021</h3>
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
    </div>
    <div id="tableDiv">
        <md-table v-model="searched" md-sort="nome_Completo" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Agendamentos</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Pesquisar por nome" v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Horário" md-sort-by="horario" md-numeric>{{ item.horario }}</md-table-cell>
        <md-table-cell md-label="Nome Completo" md-sort-by="nome_Completo">{{ item.nome_Completo }}</md-table-cell>
        <md-table-cell md-label="CPF" md-sort-by="CPF">{{ item.CPF }}</md-table-cell>
        <md-table-cell md-label="Dose" md-sort-by="dose">{{ item.dose }}</md-table-cell>
        <md-table-cell md-label="Vacina" md-sort-by="title">{{ item.vacina }}</md-table-cell>
        <md-table-cell md-label="Vacinado" md-sort-by="vacinado">{{ item.vacinado }}</md-table-cell>
            <button id="btn2dose" @click="Marcar2Dose(`${item.id}`)">Marcado</button>
        </md-table-row>
    </md-table>
  </div>
    </div>
</template>


<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.nome_Completo).includes(toLower(term)))
    }

    return items
  }
  export default {
    Name: 'TableSearch',
    data: () => ({
      search: null,
      searched: [],
      users: [
        {
          id:'1',
          horario: '08:00',
          nome_Completo: "Heloise Benedita Moreira",
          CPF: "427.395.724-84",
          dose: "1º",
          vacina: "Astrazeneca",
          vacinado: "Sim"
        },
        { 
          id:'2',
          horario: '08:15',
          nome_Completo: "Luiza Marli da Cunha",
          CPF: "516.338.571-23",
          dose: "2º",
          vacina: "CoronaVac",
          vacinado: "Não"
        },
        {
          id:'3',
          horario: '08:30',
          nome_Completo: "Giovana Tânia Luna Bernardes",
          CPF: "713.407.663-61",
          dose: "1º",
          vacina: "Astrazeneca",
          vacinado: "Não"
        },
        {
          id:'4',
          horario: '08:45',
          nome_Completo: "Renata Lúcia Caroline Cavalcanti",
          CPF: "439.877.292-87",
          dose: "1º",
          vacina: "CoronaVac",
          vacinado: "Não"

        },
        {
          id:'5',
          horario: '09:00',
          nome_Completo: "Samuel Bernardo Silveira",
          CPF: "017.148.059-72",
          dose: "2º",
          vacina: "Astrazeneca",
          vacinado: "Não"
        },
      ]
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      },
      Marcar2Dose: function(item){
        console.log(this.users[item - 1])
        console.log(item)
      }
    },
    created () {
      this.searched = this.users
    },
  }
</script>

<style lang="scss" scoped>
  #tableDiv{
    width: 60%;
    position: absolute;
    top: 260px; bottom: 0;
    left: 0; right: 0;
    margin: auto;
  }
  .md-field {
    max-width: 300px;
  }
  .md-table {
     border: solid;
    border-width: 2px;
    font-size: 16px;
    color: black;
  }
  .md-table-toolbar{
     border: solid;
    border-width: 2px;
    font-size: 16px;
    color: black;
  }
  .md-input{
    font-size: 16px;
    color: black;
  }
  .md-table-cell {
    border: solid;
    border-width: 2px;
    font-size: 16px;
    color: black;
  }
  .md-table-row{
    border: solid;
    border-width: 2px;
    font-size: 26px !important;
    color: black;
  }
  thead{
    border: solid;
    border-width: 2px;
    font-size: 26px !important;
    color: black;
  }
  #mainDiv{
  width: 60%;
  height: 40%;
  padding-top: 30px;
  position: relative;
  left: 0; right: 0;
  margin: auto;
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
  #searchDiv{
    width: 100%;
    display: inline;
    float: right;
    padding: 5px;
    margin: 10px;
  }
  #searchBtn{
    width: 40px;
    height: 40px;
    border: none !important;
    background-color: transparent;
    background-image: url("./pngegg.png");
    background-repeat: repeat-x;
    background-size: contain;
  }
  #filtro{
    width: 30%;
    display: inline;
  }
  #filtroInicio{
    display: inline;
    float: right;
    padding: 5px;
    margin: 10px;
    margin-right: 0px;
  }
  #filtroFim{
    display: inline;
    float: right;
    padding: 5px;
    margin: 10px;
    margin-right: 0px;
  }
  #filtro2{
    display: inline;
    float: right;
    padding: 5px;
    margin: 10px;
    margin-right: -25px;
    padding-right: 0px;
  }
  #btn2dose{
    margin: 0px;
    padding: 0px;
    border: 0px;
    background-color: green;
    font-weight: bolder;
  }
</style>

