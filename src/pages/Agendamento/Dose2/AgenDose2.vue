<template>
  <div>
    <div  id="mainDiv">
      <div id="titlePage">
        <h3 id="title">Agendamentos 1º dose</h3>
        <h3 id="dataDoDia">{{this.dateTransform()}}</h3>
      </div>
    </div>
     <div id="tableDiv">
          <md-table  v-model="users" md-sort="nomeCompleto" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Agendamentos</h1>
          </div>
          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Pesquisar por nome" v-model="search" @click="searchOnTable" @keypress="searchOnTable" />
          </md-field>
        </md-table-toolbar>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
         <md-table-cell class="md-table-cell" id="horariodiv" md-label="Horário" md-sort-by="horaDose1" md-numeric>{{item.horaDose1}}</md-table-cell>
            <md-table-cell md-label="Nome Completo" md-sort-by="nomeCompleto">{{item.nomeCompleto}}</md-table-cell>
            <md-table-cell md-label="CPF do Cidadão" md-sort-by="CPF">{{item.CPF}}</md-table-cell>
            <md-table-cell md-label="Tipo Da Vacina" md-sort-by="dose" >      
              <b-form-select v-if="item.tipoVacina==='A definir'" b-form-select v-model="selecTypeVacina" :options="options2" size="sm" class="mt-3"></b-form-select>
              <label v-else>{{item.tipoVacina}}</label>
            </md-table-cell>
             <md-table-cell md-label="Aplicada" md-sort-by="title">
              <button   class="btnNull" v-if="item.vacinado1==='null'" @click="changeIcon(item._id)"></button>
              <button  class="btnNotNull" v-else></button>
            </md-table-cell>
          <md-table-cell md-label="Marcar 2 Dose" md-sort-by="title" class="md-table-cell-container">
            <button v-if="item.dataDose2==='null'" id="btn3dose" @click="irAgenDose(item._id,item.nomeCompleto)">Pendente</button>
            <button v-else id="btn2dose">Marcado</button>
          </md-table-cell>
        </md-table-row>
      </md-table>
      <div>

</div>
    </div> 
    <div id="AgenDose2">
      <div id="mainDiv">
        <div id="titlePage">
       <h3>Agendamento 2º Dose: {{this.dadosAgen[1].nome}}</h3>
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
            <b-button id="btnVoltar"    @click="voltarListItens" variant="primary">Voltar</b-button>
            <b-button id="btnSave1" class="saveBtn"    @click="verifyExist" variant="primary">Salvar</b-button>
      </div>
  </div>
    </div>
  </div>
</template>


<script>
import api from '/src/services/api';
import jsPDF from 'jspdf';
  const toLower = text => {
    return text.toString().toLowerCase()
  }
  const searchByName = (items, term) => {
    
  if (term) {
    return items.filter(item => toLower(item.nomeCompleto+'').includes(toLower(term)))
  }
  return items
}
  export default {
    Name: 'TableSearch',
      mounted() {
      this.VerifySession();
      this.getDados();
       this.dadosAgen.push({
          nome: '',
          id: '' });
    },
    data: () => ({
      // dataDeHoje: this.data1,
      search: null,
      searched: [],
      users: [
        {
        }
      ],
      dadosAgen:[
        {
        }
      ],
        horaSelecionada: '',
        selectedDate:'',
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
        selecTypeVacina: null,
        options2: [
          { value: 'astrazeneca', text: 'Astrazeneca' },
          { value: 'coronavac', text: 'Coronavac' },
        ]
    }),
    methods: {
      verifyExist: function(){
          if (this.horaSelecionada===''||this.selectedDate===''|| this.value==='') {
              this.$swal("Preencha todos campos")
          }else{
            const dadosagen = (this.traduDate(this.selectedDate)+this.horaSelecionada+this.value);
            const dataFinal = this.traduDate(this.selectedDate);
            const horaFinal = this.horaSelecionada;
            const localFinal = this.value;
            api.put(`http://localhost:3000/api/v1/cidadaos/verifyExist2`,{
                          dadosagen2:  dadosagen,
            })
            .then((res)=>{
                api.put(`http://localhost:3000/api/v1/cidadaos/att2/${localStorage.getItem('cID2')}`,{
                  
                          dadosagen2:  dadosagen,
                          dataDose2: dataFinal,
                          horaDose2: horaFinal,
                          local:  localFinal,
                })
                .then((res)=>{
                  this.gerarReciboAgen1();
                  document.location.reload(true);
                })
                 
            })
            .catch((res)=>{
              this.$swal('Horario indisponivel')
            })
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
      gerarReciboAgen1: function(){
           var doc = new jsPDF()
                  const Nome = this.dadosAgen[1].nome;
                  const DataV1 = this.traduDate(this.selectedDate);
                  const DataV2 = this.getMes(DataV1);
                  const DataV3 = DataV2.replace("/", " de ").replace("/", " de "); 
                  doc.text('Recibo de Agendamento', 75,10);
                  doc.text('Paciente: '+Nome,25,25);
                  doc.text('Dose: Primeira',25,35);
                  doc.text('Local: '+this.value,25,45);
                  doc.text('Data: '+DataV3,25,55);
                  doc.text('Horário: '+this.horaSelecionada,25,65);
                  doc.text('Chegar 15 minutos antes do horário marcado!',25,75);
                  doc.output('dataurlnewwindow');         
      },
      VerifySession: function(){
          const VerifyLogin = localStorage.getItem('cId');
          if (VerifyLogin==null||VerifyLogin==undefined) {
                window.location.href = "http://localhost:8080/#/";
          } 
      },
      getDados: function(){
         api.get(`http://localhost:3000/api/v1/cidadaos/agen1`)
        .then((res)=>{
          console.log(res.data)
          if (res.data.length===0) {
             this.$swal('Sem agendamentos')
             document.getElementById('tableDiv').style.display= 'none';
          }else{
            this.users = res.data;
          }
        });
      },
      irAgenDose: function(id,nome){
          document.getElementById('tableDiv').style.display = 'none';
          document.getElementById('AgenDose2').style.display = 'block';
          this.dadosAgen[1].nome=nome;
          this.dadosAgen[1].id=id;
          localStorage.setItem('cID2',id);
      },
      voltarListItens: function(){
          document.getElementById('AgenDose2').style.display = 'none';
          document.getElementById('tableDiv').style.display = 'block';
          this.dadosAgen[1].nome='';
          this.dadosAgen[1].id='';
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      },
      created () {
        this.searched = this.users;
      },
       traduDate: function(dataRecebida){
          const data2 =  dataRecebida.toString().substring(0, 15)
          const mesEn = ['jan', 'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
          const mesPt = ['Jan', 'Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
              const date = data2.toLowerCase();;
              const mes = date.substring(4,7);
              const dia = date.substring(8,10);
              const ano = date.substring(11,15);
              const mesEnNum = mesEn.indexOf(mes)
              const found = mesPt[mesEnNum]
              const result = `${dia}/${found}/${ano}`;
              return result;
        },
        getMes: function(mesRecebido){
          const mesPt = ['Jan', 'Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
          const mesName = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto',
          'Setembro','Outubro','Novembro','Dezembro']
            const dia = mesRecebido.substring(0,3);
            const mes = mesRecebido.substring(3,6);
            const ano = mesRecebido.substring(6,11);
            const mesPtIndex = mesPt.indexOf(mes)
            const found = mesName[mesPtIndex]
            const result = `${dia}${found}${ano}`;
            return result;
        },
        changeIcon: function(id){
        console.log(id);
        const vacina = this.selecTypeVacina;
        console.log(vacina)
        if (vacina===null) {
          this.$swal('Selecione o tipo da vacina')
        }else{
         api.put(`http://localhost:3000/api/v1/cidadaos/stts1/${id}`,{
                  tipoVacina: this.selecTypeVacina,
                  vacinado1:  'aplicada',
          })
          .then((res)=>{
            this.$swal('Atualizado com sucesso');
            setTimeout(() => {
              document.location.reload(true);
            }, 1000);
          }) 
        }
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
  #btn3dose{
    width: 100%;
    height: 50px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    background-color:#F45267;
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
.saveBtn{
    float: right;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
#btnVoltar{
    margin-top: 10px !important;
    margin: 5px;   
}
.btnNull{
  background-image: url('../ListaAgenDose/x-button.png');
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 35px;
  height: 36px;
}
.btnNotNull{
  pointer-events: none;
  background-image: url('../ListaAgenDose/v-button.png');
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 35px;
  height: 36px;
}
</style>