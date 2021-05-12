<template>
  <div>
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
                     </p>
                     <!-- <p><a href="#">Forgot your password?</a></p> -->
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
                     localStorage.setItem('cData',res.data.cidadao.dataNascimento);
                     localStorage.setItem('cDD1',res.data.cidadao.dataDose1);
                     localStorage.setItem('cHD1',res.data.cidadao.horaDose1);
                     localStorage.setItem('cDD2',res.data.cidadao.dataDose2);
                     localStorage.setItem('cHD2',res.data.cidadao.horaDose2);
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
    margin-top: 68px;
    background: url('https://docs.google.com/uc?export=download&id=1hc7I5hhzrzJq9LKXv_xPcsQefSfL0xaT')
    no-repeat center center;
    background-size: cover;
    height: 92%;
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
</style>