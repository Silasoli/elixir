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
                    <b-form-input  id="data" type="text" v-model="dataField" placeholder="Data de Nascimento" required></b-form-input>
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
            <h3 class="titleForm">Complete o cadastro</h3>
                <div>
                    <h4 class="titleInput">Email</h4>    
                    <b-form-input id="email" type="email" v-model="emailField" placeholder="Email"></b-form-input>
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
                </div>
        </div>
    </div>   
</template>

<script>
import api from '/src/services/api'


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
      cidadao: [
        {
          
        }
      ]
    }
  },
  components: {
  },
  methods:{
    cadastrarUsuario: function(){
        if (this.nomeField === ''|| this.dataField < 8 || this.CPFField < 11 || this.telefoneField < 11
            || this.emailField === ''|| this.senhaField < 5 || this.confirmSenhaField < 5) {
                this.$swal("Campos Vazios ou inválidos")
        } else{
                const nome = this.nomeField;
                const data = this.dataField;
                const CPF = this.CPFField;
                const telefone = this.telefoneField;
                const email = this.emailField;
                const senha = this.senhaField;
                const senhaConfirm = this.confirmSenhaField;
                if (senha===senhaConfirm) {
                        api.post('http://localhost:3000/api/v1/register',{
                    nomeCompleto: nome,
                    dataNascimento: data,
                    CPF: CPF,
                    tel: telefone,
                    email: email,
                    password:senha,
                })
                    .then((res) => {
                    if(res.status==201){
                        console.log(res.data.cidadao)
                        this.$swal("Cadastrado com sucesso!")
                        window.location.href = "http://localhost:8080/#/";
                    }
                    })
                    .catch((err) => {
                    this.$swal("Cidadão não cadastrado")
                });  
                } else{
                     this.$swal("Senha e Confirme a sua senha não correspondem")
                }
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
.cad{
    left:50%;
    top:50%;
    margin-left:-20%; /* Metade do valor da Largura */
    margin-top:100px; /* Metade da valor da Altura */
    position:absolute;
    width:40%; /* Valor da Largura */
    height:100px; /* Valor da Altura */
}
#CadUsu2{
    display:none;
}
.saveBtn{
    float: right;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
.returnBtn{
    float: left;
    margin-top: 10px !important;
    margin: 5px;
    background-color: #F45267 !important;
    border: none !important;
}
.titleInput{
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
</style>>


       