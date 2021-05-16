<template>
    <div id="prin">
      <div id="cabecalho">
        <h3>Olá, {{this.dadosUsuario[0].nome}}</h3>
      </div>
      <div id="divInfo">
        <div>
          <h1 id="title">Agendamentos</h1>
        </div>
        <div id="divD1" class="divsAgen">
          <h2 class="divTitleAgen">Primeira Dose</h2>
            <p v-if="this.dadosUsuario[0].dataDose1=='null'">Não agendada</p>
            <p v-if="this.dadosUsuario[0].dataDose1!='null'">Data primeira dose: {{this.dadosUsuario[0].dataDose1}}</p>
            <p v-if="this.dadosUsuario[0].horaDose1!='null'">Hora primeira dose: {{this.dadosUsuario[0].horaDose1}}</p>
        </div>
        <div id="divD2" class="divsAgen">
          <h2 class="divTitleAgen">Segunda Dose</h2>
            <p v-if="this.dadosUsuario[0].dataDose2=='null'">Não agendada</p>
            <p v-if="this.dadosUsuario[0].dataDose2!='null'">Data primeira dose: {{this.dadosUsuario[0].dataDose2}}</p>
            <p v-if="this.dadosUsuario[0].horaDose2!='null'">Hora primeira dose: {{this.dadosUsuario[0].horaDose2}}</p>
        </div>
      </div>
    </div>
</template>
<script>
import api from '/src/services/api'

export default {
    name: 'NavBar.vue',
    mounted() {
      this.VerifySession();
      this.pegarDados();
    },
    data() {
        return{
             id: localStorage.getItem('cId'),
        dadosUsuario:[

        ]
      }
   },
    methods: {
          CadCidadaoNew: function() {
            window.location.href = "http://localhost:8080/#/cadcidadao";
        },
        VerifySession: function(){
          const VerifyLogin = localStorage.getItem('cId');
          if (VerifyLogin==null||VerifyLogin==undefined) {
                window.location.href = "http://localhost:8080/#/";
          } 
        },
        pegarDados: function(){
           api.get(`http://localhost:3000/api/v1/cidadaos/${localStorage.getItem('cId')}`)
           .then((res) => {
              const nome = res.data.nomeCompleto;
              const tipoDeUsuario = res.data.tipoUsuario; 
              const dataDose1 = res.data.dataDose1;
              const horaDose1 = res.data.horaDose1;
              const dataDose2 = res.data.dataDose2;
              const horaDose2 = res.data.horaDose2;
              this.dadosUsuario.push({
                  nome: nome,
                  tipoDeUsuario: tipoDeUsuario,
                  dataDose1: dataDose1,
                  horaDose1: horaDose1,
                  dataDose2: dataDose2,
                  horaDose2: horaDose2,
                  id: this.dadosUsuario.length + 1 });
                  console.log(this.dadosUsuario[0]);
            })
           
        }
    }
}
</script>
<style scoped>
  #cabecalho{
    padding: 50px;
    padding-bottom: 25px;
    margin-left: 20px;
  }
  #divInfo{ 
  width: 50%;
  padding-top: 15px;
  padding-bottom: 20px;
  position: relative;
  top: 0; bottom: 0;
  left: 0; right: 20;
  margin: auto;
  background-color: #6A5ACD;
  }
  #title{
    text-align: center
  }
  .divsAgen{
    /* display: inline; */
    width: 100%;
    padding: 20px;
    background-color: #FFF9F9;
    margin-top: 15px;
    border: solid;
    /* min-height: 180px; */
  }
  .divTitleAgen{
    text-align: center
  }
  p{
    margin: 25px;
    margin-left: 0px;
    font-size: 20px;
  }


   @media screen and (max-width:768px){
     #divInfo{ 
        width: 100%;
        padding-top: 15px;
        position: relative;
        top: 0;
        bottom: 100px !important;
        left: 0; 
        right: 20;
        margin: auto;
        background-color: #6A5ACD;
        }
        #prin{
          height: 120vh;
        }

  @media screen and (min-width:320px){
     #divInfo{ 
  width: 100%;
  padding-top: 15px;
  position: relative;
  top: 0;
  bottom: 100px !important;
  left: 0; 
  right: 20;
  margin: auto;
  background-color: #6A5ACD;
  }
  #prin{
    height: 120vh;
  }

  }
</style>
