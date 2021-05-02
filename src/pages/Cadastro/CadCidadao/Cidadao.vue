<template>
    <div :class="{'cidadao': !ispremium,'cidadao-premium': ispremium}">
        <h4>Nome: {{cidadao.nome}}</h4>
        <hr>
        <p>CPF: {{cidadao.CPF}}</p>
        <p>Telefone: {{cidadao.telefone}}</p>
        <p v-if="cidadao.data!='0'">idade: {{cidadao.data}}</p>
        <p v-else>a idade foi escondida</p>
        <hr>
        <p>Telefone: {{cidadao.telefone}}</p>
        <p>Email: {{cidadao.email}}</p>
        <p>Senha: {{cidadao.senha}}</p>
        <button @click="mudarCor">Mudar cor</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            ispremium: true
        }
    },
    props:{
        cidadao: Object,
        showidade: Boolean
    },
    methods:{
        mudarCor: function(){
            this.ispremium = !this.ispremium;
        }
    }
}
</script>

<style scoped>
    .cidadao{
        background-color: #c4c4c4;
        max-width: 600px;
        height: 280px;
        padding: 1%;
        margin-top: 10%;
        margin-bottom: 20%;
    }
    .cidadao-premium{
        background-color: black;
        color: yellow;
        max-width: 600px;
        height: 280px;
        padding: 1%;
        margin-top: 10%;
        margin-bottom: 20%;
    }
</style>