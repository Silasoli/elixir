const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

var CidadaoSchema = new Schema({
    nomeCompleto:{
        type: String,
        required: true
    },
    dataNascimento:{
        type:String,
        required: true
    },
    tipoUsuario:{
        type:String,
        default:'cidadao'
    },
    CPF:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        required: true
    },
    tipoVacina:{
        type: String,
        default:'null'
    },
    local:{
        type: String,
        default:'null'
    },
    dataDose1:{
        type: String,
        default:'null'
    },
    horaDose1:{
        type: String,
        default:'null',
    },
    dataDose2:{
        type: String,
        default:'null'
    },
    horaDose2:{
        type: String,
        default:'null'
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    tokens: [
        {
          token: { type: String, required: true },
        },
      ],
    }, {
      timestamps: true,
      collection: 'cidadaos',
});

CidadaoSchema.pre('save', async function(next) {
    const cidadao = this;
    if(cidadao.isModified('password')){
        cidadao.password = await bcrypt.hash(cidadao.password,10);
    }
    next();
});

CidadaoSchema.methods.generateAuthToken = async function() {
    const cidadao = this;
    const token =  jwt.sign({ _id: cidadao._id, nomeCompleto: cidadao.nomeCompleto, email:cidadao.email }, 'secret');
    cidadao.tokens =  cidadao.tokens.concat({ token });
    await cidadao.save();
    return token;
};

CidadaoSchema.statics.findByCredentials =  async(email, password) =>{
    const cidadao = await Cidadao.findOne({ email });
    if (!cidadao) {
        throw new Error({ error:'Login invalido!'});
    }
    const isPasswordMatch = await bcrypt.compare(password, cidadao.password);
    if(!isPasswordMatch){
        throw new Error({ error:'Login invalido!'});
    }
    return cidadao;
};

const Cidadao =  mongoose.model('Cidadao',CidadaoSchema);

module.exports = Cidadao;