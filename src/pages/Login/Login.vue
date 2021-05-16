<template>
  <div id="principal">
      <div id="app">


   <div class="login-page">
      <transition name="fade">
         <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                  <h1>Logar</h1>
                  <form class="form-group" @submit.prevent="">
                     <input v-model="emailField" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordField" type="password" class="form-control" placeholder="Senha" required>
                     <input type="submit" class="btn btn-primary" @click="doLogin">
                     <p>Não tem uma conta? <a href="#" @click="CadCidadaoNew">Criar</a>
                     <p>Entrar como Aplicador <a href="#" @click="irAplicador">Entrar</a>
                     </p>
                  </form>
               </div>
               </div>
            </div>
         </div>
      </div>
   </div>

</div>
</template>

<script>
import api from '/src/services/api' 

export default {
    name: 'NavBar.vue',
    data() {
        return{
        emailField: "",
        passwordField: "",
        emptyFields: false,
        Login:[
           {

           }
        ]
      }
   },
    
    methods: {
        doLogin() {
            if (this.emailField.length < 5 || this.passwordField < 5) {
                this.emptyFields = true;
                this.$swal("Preencha todos os campos corretamente")
            } else {
                  const email1 = this.emailField;
                  const senha1 = this.passwordField;
               api.post('http://localhost:3000/api/v1/login',{
                  email: email1,
                  password:senha1,
               })
                .then((res) => {
                   if(res.status==201){
                     //  console.log(res.data.cidadao)
                     this.$swal("Logado com sucesso!")
                     window.location.href = "http://localhost:8080/#/home";
                     localStorage.setItem('cId',res.data.cidadao._id);
                     localStorage.setItem('tipoUsuario',res.data.cidadao.tipoUsuario);
                     localStorage.setItem('cNome',res.data.cidadao.nomeCompleto);
                     document.location.reload(true);
                   }
                })
                .catch((err) => {
                  this.$swal("Email ou senha invalidos")
               });
            }
        },
          CadCidadaoNew: function() {
            window.location.href = "http://localhost:8080/#/cadcidadao";
        },
           irAplicador: function() {
            window.location.href = "http://localhost:8080/#/loginaplicador";
        },
    }
}
</script>

<style scoped>
p {
   line-height: 1rem;
}
.card {
   padding: 20px;
}
input {
    margin-bottom: 20px;
}
.login-page {
   align-items: center;
   display: flex;
   height: 80vh;
}
.wallpaper-login {
    margin-top: 76px;
    background: url('https://docs.google.com/uc?export=download&id=1hc7I5hhzrzJq9LKXv_xPcsQefSfL0xaT')
    no-repeat center center;
    background-size: cover;
    height: 89.5%;
    position: absolute;
    width: 100%;
}
h1 {
    margin-bottom: 1.5rem;
}
.error {
    animation-name: errorShake;
    animation-duration: 0.3s;
}


@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}


@media screen and (max-width:1440px)  {
   .wallpaper-login {
    margin-top: 60px;
    background: url('https://docs.google.com/uc?export=download&id=1hc7I5hhzrzJq9LKXv_xPcsQefSfL0xaT')
   }
    h1 {
    width: 100%;
}
}


@media screen and (max-width:1440px)  {
   .wallpaper-login {
    margin-top: 66px;
    background: url('https://docs.google.com/uc?export=download&id=1hc7I5hhzrzJq9LKXv_xPcsQefSfL0xaT')
    no-repeat center center;
    background-size: cover;
    height: 92%;
    position: absolute;
    width: 100%;
}

}
@media screen and (min-height: 812px){

    .wallpaper-login {
    margin-top: 99px;
    background: url('https://docs.google.com/uc?export=download&id=1hc7I5hhzrzJq9LKXv_xPcsQefSfL0xaT')
    no-repeat center center;
    background-size: cover;
    height: 92%;
    position: absolute;
    width: 100%;
}
.container{
 position: relative;
 top: -100px !important;
}
}
</style>