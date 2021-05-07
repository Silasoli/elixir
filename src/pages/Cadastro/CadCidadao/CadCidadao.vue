<template>
    <div id="main">
        <div id="CadUsu" class="cad">
            <h3 class="titleForm">Para começar realize o cadastro</h3>
                <div>
                    <h4 class="titleInput">Nome Completo</h4>    
                    <b-form-input id="name" type="text" v-model="nomeField" placeholder="Nome completo" required></b-form-input>
                </div>
                <div>
                    <h4 class="titleInput">Data de Nascimento</h4>    
                    <b-form-input  id="data" type="date" v-model="dataField" placeholder="Data de Nascimento" required></b-form-input>
                </div>
                <div>
                    <h4 class="titleInput">CPF</h4>    
                    <b-form-input id="CPF" type="text" v-model="CPFField" placeholder="CPF" v-mask="'###.###.###-##'" required></b-form-input>
                </div>
                <div>
                    <h4 class="titleInput">Telefone</h4>    
                    <b-form-input id="telefone" type="text" v-model="telefoneField" placeholder="Telefone" v-mask="'(##) # ####-####'" required></b-form-input>
                </div>
                <div>
                    <b-button  id="btnSave" class="saveBtn" @click="salvar1" variant="primary">Salvar</b-button>
                </div>
        </div>     
        <div id="CadUsu2" class="cad">
            <h3  id="formtitle2" class="titleForm">Complete o cadastro:</h3>
                <div id="email">
                    <h4 class="titleInput2">Email:</h4>    
                    <b-form-input class="email" type="email" v-model="emailField" placeholder="Email"></b-form-input>
                </div>
                <div>
                    <h4 class="titleInput">Senha</h4>    
                    <b-form-input minlength="5"  id="senha" type="password" v-model="senhaField" placeholder="Senha"></b-form-input>
                </div>
                <div>
                    <h4 class="titleInput">Confirme a sua senha</h4>    
                    <b-form-input minlength="5" id="senha2" type="password" v-model="confirmSenhaField" placeholder="Confirme a senha"></b-form-input>
                </div>
                <div>
                    <b-button id="btnSave1" class="saveBtn"    @click="salvar2" variant="primary">Salvar</b-button>
                    <b-button class="returnBtn"  @click="voltar" variant="primary">Voltar</b-button>
                </div>
                <div>
                <!-- <div id="list" v-for="cidadao in cidadaos" :key="cidadao.id">
                    <Cidadao :cidadao="cidadao"></Cidadao>
                </div> -->
                </div>
        </div>
    </div>   
</template>

<script>
// import jsPDF from 'jspdf';

export default {
  name: 'CadUsu',
  data(){
    return{
     nomeField: '',
     dataField: '',
     CPFField: '',
     telefoneField:'',
     emailField:'',
     senhaField:'',
     confirmSenhaField:'',
      cidadaos: [
        {
          
        }
      ]
    }
  },
  components: {
    //   Cidadao,
    //   jsPDF,
  },
  methods:{
    cadastrarUsuario: function(){
        if (this.nomeField === ''|| this.dataField < 8 || this.CPFField < 11 || this.telefoneField < 11
            || this.emailField === ''|| this.senhaField < 5 || this.confirmSenhaField < 5) {
                this.$swal("Campos Vazios ou inválidos")
        } else{
                this.cidadaos.push({
                nome:this.nomeField,
                data:this.dataField,
                CPF:this.CPFField, 
                telefone: this.telefoneField,
                email: this.emailField,
                senha:this.senhaField,
                confirmSenha:this.senhaField,
                id: this.cidadaos.length + 1 });
                console.log(this.cidadaos)
                this.nomeField = '',
                this.dataField = '',
                this.CPFField = '',
                this.telefoneField ='',
                this.emailField ='',
                this.senhaField ='',
                this.confirmSenhaField=''
                this.gerarPDF();
        }
    },
    salvar1: function(){
        if (this.nomeField === ''|| this.dataField < 8 || this.CPFField < 11 || this.telefoneField < 11) {
                this.$swal("Preencha todos os campos corretamente")

        } else{
            document.getElementById('CadUsu2').style.display = "block";
            document.getElementById('CadUsu').style.display = "none";
        }
    },
    salvar2: function(){
        if (this.emailField === ''|| this.senhaField < 5 || this.confirmSenhaField < 5) {
                this.$swal("Preencha todos os campos corretamente")
        } else{
           this.cadastrarUsuario();
        }
    },
    voltar: function(){
        document.getElementById('CadUsu2').style.display = "none";
        document.getElementById('CadUsu').style.display = "block";
    },
    // gerarPDF: function(){
    //     var doc = new jsPDF()
    //     doc.text('Recibo de cadastro', 85,10)
    //     doc.output('dataurlnewwindow');
    // },
    }
}
</script>

<style scoped>
#main{
    max-width: 100%;
    text-align: center;
    width: 100%;
    position: relative;
    left: 0; right: 0;
    margin: auto;
}
#CadUsu{
    
    position:relative !important;
    left:50%;
    top:-70px  !important ;
    margin-left:-20%; /* Metade do valor da Largura */
    margin-top:100px; /* Metade da valor da Altura */
    width:40%; /* Valor da Largura */
    height:100% ; /* Valor da Altura */
}
#btnSave3{
    position: relative;
    top: 0px;
    left: 40%;
    background-color: #F45267 !important;
}
/*Tela 2*/
#CadUsu2{
    display: none;
    position: relative;
    left: 30%;
    width: 40%;
}
#btnSave4{
     position: relative !important;
    top: 10px !important;
    left: 35%;
    background-color: #F45267 !important;
}
#returnBtn2{
    float: left;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
.titleInput1{
    float: left;
    margin: 5px;
    padding: 5px;
    margin-left: -30px;
}
.titleInput2{
    float: left;
    margin: 5px;
    padding: 5px;
    margin-left: -30px;
}
.titleForm{
    margin-left: -40px;
    padding: 5px;
    text-align: left;
}
@media (max-width:801px){
    h3#formtitle{
    margin-left: -40px;
    padding: 0px;
    text-align: left;
    font-size: 18pt;
}
.titleInput1{
    font-size: 15pt;
    text-align: left;
}
div#name{
  position: relative;
  left: -45%;
}
.name{
    width: 180%;
    padding: 20px;
}
div#data{
    position: relative;
  left: -45%;
}
.data{
    width: 180%;
    padding: 20px;
}
div#CPF{
  position: relative;
  left: -45%;
}
.CPF{
    width: 180%;
    padding: 20px;
}
div#telefone{
  position: relative;
  left: -45%;
}
.telefone{
    width: 180%;
    padding: 20px;
}
}
@media (min-width: 320px){
/*tela 2*/
 h3#formtitle2{
     position: relative;
     top: 0px !important;
    margin:20px 0px 0px -40px;
    text-align: left;
    font-size: 18pt;
    
    
}
.titleInput2{
    font-size: 15pt;
    text-align: left;
}
#email{
position: relative;
left: -45%;
}
.email{
    width: 180%;
    padding: 20px;
}
#senha{
position: relative;
left: -45%;
}
.senha{
     width: 180%;
    padding: 20px;
}
#senha2{
position: relative;
left: -45%;
}
.senha2{
     width: 180%;
    padding: 20px;
}
#btnSave3{
    position: relative;
    top: 20px;
    left: 55%;
}
#btnSave4{
    position: relative;
    left: 58%;
    top: 10px !important;
}
#returnBtn2{
    position: relative;
     top: -36px !important;
     left: -48%;
   
}
}
@media (min-width: 375px ){
#btnSave4{
    position: relative;
    left: 38%;
    top: 5px !important;
}
  #returnBtn2{
    position: relative;
     top: 0vh !important;
     left: -48%;        
}
}
@media (min-width: 768px ){
    #btnSave3{
    position: relative;
    top: 0px;
    left: 75%;
}
#btnSave4{
    position: relative;
    left: 62%;
    top: 5px !important;
}
}

@media (min-width: 1024px){
#CadUsu2{
    position: relative;
    left: 35%;
    width: 40%;
}

div#email{
  position: relative;
  left: -10%;
}
.email{
    width: 100%;
    padding: 20px;
}
div#senha{
  position: relative;
  left: -10%;
}
.senha{
   width: 100%;
    padding: 20px;
}
div#senha2{
  position: relative;
  left: -10%;
}
.senha2{
   width: 100%;
    padding: 20px;
}
#btnSave3{
    position: relative;
    left: 42%;
}
#btnSave4{
    position: relative;
    left: 22%;
}
#returnBtn2{
    position: relative;
     top: 0vh !important;
     left: -10%;
}

}
</style>

       