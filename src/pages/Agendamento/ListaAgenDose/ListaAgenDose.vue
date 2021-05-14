<template>
  <div>
    <div  id="mainDiv">
      <div id="titlePage">
        <h3 id="title">Agendamentos 2º dose</h3>
        <h3 id="dataDoDia">{{this.dateTransform()}}</h3>
      </div>
    </div>
     <div id="tableDiv">
          <md-table v-model="users" md-sort="nomeCompleto" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Agendamentos</h1>
          </div>
          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Pesquisar por nome" v-model="search" @input="searchOnTable" />
          </md-field>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell class="md-table-cell" id="horariodiv" md-label="Horário" md-sort-by="horaDose1" md-numeric>{{item.horaDose2}}</md-table-cell>
            <md-table-cell md-label="Nome Completo" md-sort-by="nomeCompleto">{{item.nomeCompleto}}</md-table-cell>
            <md-table-cell md-label="CPF do Cidadão" md-sort-by="CPF">{{item.CPF}}</md-table-cell>
            <md-table-cell md-label="Tipo Da Vacina" md-sort-by="dose">{{item.tipoVacina}}</md-table-cell>
            <md-table-cell md-label="Aplicada" md-sort-by="title">
              <button class="btnNull" v-if="item.vacinado2==='null'" @click="changeIcon(item._id)"></button>
              <button class="btnNotNull" v-else></button>
            </md-table-cell>
        </md-table-row>
      </md-table>
    </div> 
  </div>
</template>


<script>
import api from '/src/services/api';

  const toLower = text => {
    return text.toString().toLowerCase()
  }
  const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.nomeCompleto).includes(toLower(term)))
  }
  return items
}
  export default {
    Name: 'TableSearch',
      mounted() {
      this.VerifySession();
      this.getDados();
    },
    data: () => ({
      // dataDeHoje: this.data1,
      search: null,
      users: [
        {
        }
      ],
    }),
    methods: {
      VerifySession: function(){
        // const VerifyLogin = localStorage.getItem('cId');
        if (localStorage.getItem('tipoUsuario')!='aplicador') {
              window.location.href = "http://localhost:8080/#/home";
        }
      }, 
      dateTransform: function(){
          const dataDoDia = new Date();
          const data2 =  dataDoDia.toString().substring(0, 15)
          const mesEn = ['jan', 'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
          const mesPt = ['01', '02','03','04','05','06','07','08','09','10','11','12'];

              const date = data2.toLowerCase();;
              const mes = date.substring(4,7);
              const dia = date.substring(8,10);
              const ano = date.substring(11,15);
              const mesEnNum = mesEn.indexOf(mes)
              const found = mesPt[mesEnNum]
              const result = `${dia}/${found}/${ano}`;
              return result;
      },
      getDados: function(){
        api.get(`http://localhost:3000/api/v1/cidadaos`)
        .then((res)=>{
          this.users = res.data;
        });
      },
      searchOnTable () {
        this.users = searchByName(this.users, this.search)
      },
      changeIcon: function(id){
        console.log(id);
          api.put(`http://localhost:3000/api/v1/cidadaos/stts2/${id}`,{
                  vacinado2:  'aplicada',
          })
          .then((res)=>{
            this.$swal('Atualizado com sucesso');
            setTimeout(() => {
              document.location.reload(true);
            }, 1000);
          })
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  #tableDiv{
    width: 61.8%;
    position: absolute;
    top: 260px; bottom: 0;
    left: 0; right: 0;
    margin: auto;
  }
  .md-field {
    max-width: 300px;
  }
  #horariodiv{
    padding:10px;
  }
  .md-table {
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
  #mainDiv{
  width: 61.8%;
  height: 40%;
  padding-top: 30px;
  position: relative;
  left: 0; right: 0;
  margin: auto;
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
  #btn2dose{
    width: 100%;
    height: 50px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    background-color: green;
    font-weight: bolder;
    
  }
  .md-table-cell-container{
    padding: 0px;
    margin: 0px;
  }
  .md-table-cell{
    width: 11px;
  }
  #AgenDose2{
    display: none;
  }
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
.btnNull{
  background-image: url('./x-button.png');
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 35px;
  height: 36px;
}
.btnNotNull{
  background-image: url('./v-button.png');
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 35px;
  height: 36px;
}
</style>

