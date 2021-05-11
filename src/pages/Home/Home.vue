<template>
    <div>
      <div id="cabecalho">
        <h1>Olá, {{nome}}</h1>
      </div>
      <div id="divInfo">
        <div>
          <h1 id="title">Agendamentos</h1>
        </div>
        <div id="divD1" class="divsAgen">
          <h2 class="divTitleAgen">Primeira Dose</h2>
            <p v-if="dataDose1==='' || dataDose1==='null'">Não agendada</p>
            <p v-if="dataDose1!='null'">Data primeira dose: {{dataDose1}}</p>
            <p v-if="horaDose1!='null'">Hora primeira dose: {{horaDose1}}</p>
        </div>
        <div id="divD2" class="divsAgen">
          <h2 class="divTitleAgen">Segunda Dose</h2>
            <p v-if="dataDose1==='' || dataDose1==='null'">Não agendada</p>
            <p v-if="dataDose1!='null'">Data primeira dose: {{dataDose2}}</p>
            <p v-if="horaDose1!='null'">Hora primeira dose: {{horaDose2}}</p>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    name: 'NavBar.vue',
    data() {
        return{
             nome: localStorage.getItem('cNome'),
             dataDose1: localStorage.getItem('cDD1'),
             horaDose1: localStorage.getItem('cHD1'),
             dataDose2: localStorage.getItem('cDD2'),
             horaDose2: localStorage.getItem('cHD2'),
      }
   },
    methods: {
          CadCidadaoNew: function() {
            window.location.href = "http://localhost:8080/#/cadcidadao";
        },
    }
}
</script>
<style scoped>
  #cabecalho{
    padding: 50px;
    margin-left: 20px;
  }
  #divInfo{ 
  width: 50%;
  padding-top: 15px;
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
    display: inline-block;
    width: 50%;
    padding: 20px;
    background-color: #FFF9F9;
    margin-top: 15px;
    border: solid;
    min-height: 180px;
  }
  .divTitleAgen{
    text-align: center
  }
  p{
    margin: 25px;
    margin-left: 0px;
    font-size: 20px;
  }
</style>
