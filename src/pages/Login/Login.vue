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
                  <form class="form-group">
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
                this.Login.push({
                  email: this.emailField,
                  senha:this.passwordField,
                  id: this.Login.length + 1 });
                  console.log(this.Login[1]);
               // window.location.href = "http://localhost:8080/#/home";
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
    margin-top: 93px;
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