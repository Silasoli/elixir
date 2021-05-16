<template>
  <div id="mainDiv2">
      <!-- TELA 1 -->
      <div id="mainDiv">
          <div id="titlePage">
            <h3>Selecione data , posto e horário:</h3>
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
            <v-date-picker class="Data" mode="date" v-model='selectedDate'  :value="null" color="purple" is-dark is-expanded />
          </div> 
              <b-button id="btnSave1" class="saveBtn"    @click="verifyExist" variant="primary">Salvar</b-button>
      </div>
        <div id="secondDiv">
      <div id="secondDivContent">
        <h3>Agendamento já realizado</h3>
        <b-button id="secondDivBtn" @click="gerarReciboAgen2" variant="primary">Gerar Comprovante de Agendamento</b-button>
      </div>
</div>
  </div>
</template>

<script>
import api from '/src/services/api'
import jsPDF from 'jspdf';


 export default {
     components: {
  },
   mounted() {
      this.VerifySession();
    },
    data() {
      return {
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
        dataAgen1: [

        ]
      }
    },
    methods:{
        verifyExist: function(){
          if (this.horaSelecionada===''||this.selectedDate===''|| this.value==='') {
              this.$swal("Preencha todos campos")
          }else{
            const dadosagen = (this.traduDate(this.selectedDate)+this.horaSelecionada+this.value);
            const dataFinal = this.traduDate(this.selectedDate);
            const horaFinal = this.horaSelecionada;
            const localFinal = this.value;
            api.put(`http://localhost:3000/api/v1/cidadaos/verifyExist`,{
                          dadosagen1:  dadosagen,
            })
            .then((res)=>{
                api.put(`http://localhost:3000/api/v1/cidadaos/att1/${localStorage.getItem('cId')}`,{
                          dadosagen1:  dadosagen,
                          dataDose1: dataFinal,
                          horaDose1: horaFinal,
                          local:  localFinal,
                      })
                  // this.$swal("Agendado com sucesso");
                  this.gerarReciboAgen1();
                  window.location.href = "http://localhost:8080/#/home"
                  // document.location.reload(true);
                })
            .catch((res)=>{
              this.$swal('Horario indisponivel')
            })
          }
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
        gerarReciboAgen1: function(){
           var doc = new jsPDF()
                  const Nome = localStorage.getItem('cNome');
                  

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
         gerarReciboAgen2: function(){
           var doc = new jsPDF()
           api.get(`http://localhost:3000/api/v1/cidadaos/${localStorage.getItem('cId')}`)
                .then((res) => {
                  const dataDose1 = res.data.dataDose1;
                  const horaDose1 = res.data.horaDose1;
                  const local = res.data.local;

                  const Nome = localStorage.getItem('cNome');

                  const DataV2 = this.getMes(dataDose1);
                  const DataV3 = DataV2.replace("/", " de ").replace("/", " de "); 

                  doc.text('Recibo de Agendamento', 75,10);
                  doc.text('Paciente: '+Nome,25,25);
                  doc.text('Dose: Primeira',25,35);
                  doc.text('Local: '+local,25,45);
                  doc.text('Data: '+DataV3,25,55);
                  doc.text('Horário: '+horaDose1,25,65);
                  doc.text('Chegar 15 minutos antes do horário marcado!',25,75);
                  doc.output('dataurlnewwindow');
            });
          
        },
        VerifySession: function(){
            const VerifyLogin = localStorage.getItem('cId');
            if (VerifyLogin==null||VerifyLogin==undefined) {
                 window.location.href = "http://localhost:8080/#/";
            } else {
              api.get(`http://localhost:3000/api/v1/cidadaos/${localStorage.getItem('cId')}`)
                .then((res) => {
                  const dataDose1 = res.data.dataDose1;
                  const horaDose1 = res.data.horaDose1;
                    if (dataDose1!='null' && horaDose1!='null') {
                      document.getElementById('mainDiv').style.display = 'none';
                      document.getElementById('secondDiv').style.display = 'block';
                    }  else {
                        document.getElementById('mainDiv').style.display = 'block';
                      document.getElementById('secondDiv').style.display = 'none';
                    }
            });        
        }
      },
 }
 }
</script>

<style scoped>
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
#mainDiv{
  width: 50%;
  padding-top: 30px;
  position: relative;
  top: 70px; bottom: 0;
  left: 0; right: 0;
  margin: auto;
}
.saveBtn{
   float: right;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
#secondDiv{
  width: 100%;
  padding-top: 30px;
  position: relative;
  top: 200px; bottom: 0;
  left: 0px; right: 0px;
  margin: auto;
}
#secondDivContent{
  width: 60%;
  float: right;
}
#secondDivBtn{
  width: 36%;
}
/*Tela de 320*/
@media screen and (max-width:280px){
  #mainDiv2{
  background-color:#E5E5E5 !important;
  max-height:260% !important;
  overflow-x:hidden !important;
}

div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}
#selectDate{
  
  position: relative;
  left: -38%;
  top: -30px;
  width: 175% !important;
}
.selectLocalItem{
  position: relative;
  left: -30%;
  top: 0px;
  width: 120%;
}

.selectHours{
  position: relative;
  left: -30%;
  top: 298px;
  width: 100%;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -10px !important;
  left: 80%!important;
 
}

}

@media screen and (max-width:768px){
  #mainDiv2{
  background-color:#E5E5E5 !important;
  max-height:260% !important;
  overflow-x:hidden !important;
}

div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}

#secondDiv{
  width: 100%;
  padding-top: 30px;
  position: relative;
  top: 200px; bottom: 0;
  left: 0px; right: 0px;
  margin: auto;
}
#secondDivContent{
  width: 60%;
  float: right;
}
#secondDivBtn{
  width: 36%;
}

#selectDate{
  
  position: relative;
  left: -38%;
  top: -30px;
  width: 175% !important;
}
.selectLocalItem{
  position: relative;
  left: -30%;
  top: 0px;
  width: 50%;
}

.selectHours{
  position: relative;
  left: 70%;
  top: -40px;
  width: 60%;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -10px !important;
  left: 105%!important;
 
}

}

@media screen and (max-width:1281px){
  #mainDiv2{
  background-color:#E5E5E5 !important;
  max-height:260% !important;
  overflow-x:hidden !important;
}

div#titlePage  {
    text-align: center;
    position: absolute;
    top: -100px  ;
}
#selectDate{
  position: relative;
  left: -10%;
  top: -90px;
  width: 125% !important;
}
.selectLocalItem{
  position: relative;
  left: -8%;
  top: 0px;
  width: 40%;
}

.selectHours{
  position: relative;
  left: 74%;
  top: -40px;
  width: 40%;
}
#selectLocal{
  position: relative;
  top: -60px;
}
#btnSave1{
   background-color: #F45267 !important;
  position: relative !important;
  top: -60px !important;
  left: 106.5%!important;
}

} 


</style>