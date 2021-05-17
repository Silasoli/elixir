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
                  <h1>Olá, aplicador</h1>
                  <form class="form-group" @submit.prevent="">
                     <input v-model="emailField" type="email" class="form-control" placeholder="Email" required>
                     <input v-model="passwordField" type="password" class="form-control" placeholder="Senha" required>
                     <input type="submit" class="btn btn-primary" @click="doLogin2">
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
         doLogin2() {
            if (this.emailField.length < 5 || this.passwordField < 5) {
                this.emptyFields = true;
                this.$swal("Preencha todos os campos corretamente")
            } else {
                  const email1 = this.emailField;
                  const senha1 = this.passwordField;
               api.post('http://localhost:3000/api/v1/login/aplicador',{
                  email: email1,
                  password:senha1,
               })
                .then((res) => {
                   if(res.status==201){
                     //  console.log(res.data.cidadao)
                     this.$swal("Logado com sucesso!")
                     window.location.href = "http://localhost:8080/#/agendose2";
                     localStorage.setItem('cId',res.data.aplicador._id);
                     localStorage.setItem('tipoUsuario',res.data.aplicador.tipoUsuario);
                     document.location.reload(true);
                   }
                })
                .catch((err) => {
                  this.$swal("Email ou senha invalidos")
               });
            }
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
   opacity: 90%;
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
    /* z-index: 0; */
    margin-top: 76px;
    background: url('../../assets/slide2.png')
    no-repeat center center;
    background-size: cover;
    background-position-y: 10px;
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
    margin-top: 66px;
     background: url('../../assets/slide2.png')
    no-repeat center center;
    background-size: cover;
    background-position-y: 10px;
    height: 92%;
    position: absolute;
    width: 100%;
    
}
   .card{
      position: relative;
      top: 100px;
   }
}
@media screen and (max-height: 812px){

    .wallpaper-login {
    margin-top: 99px;
    background: url('../../assets/slide2.png')
    no-repeat center center;
    background-size: cover;
    background-position-y: 10px;
    height: 92%;
    position: absolute;
    width: 100%;
    
}
.container{
 position: relative;
 top: -100px !important;
}

 .card{
      position: relative;
     top: 100px;
}
}
</style>