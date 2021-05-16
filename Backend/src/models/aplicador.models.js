const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

var AplicadorSchema = new Schema({
    nomeCompleto:{
        type: String,
        required: true
    },
    tipoUsuario:{
        type:String,
        default:'aplicador'
    },
    posto:{
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
      collection: 'aplicadores',  
});

AplicadorSchema.pre('save', async function(next) {
    const aplicador = this;
    if(aplicador.isModified('password')){
        aplicador.password = await bcrypt.hash(aplicador.password,10);
    }
    next();
});

AplicadorSchema.methods.generateAuthToken = async function() {
    const aplicador = this;
    const token =  jwt.sign({ _id: aplicador._id, nomeCompleto: aplicador.nomeCompleto, email:aplicador.email }, 'secret');
    aplicador.tokens =  aplicador.tokens.concat({ token });
    await aplicador.save();
    return token;
};

AplicadorSchema.statics.findByCredentials =  async(email, password) =>{
    const aplicador = await Aplicador.findOne({ email });
    if (!aplicador) {
        throw new Error({ error:'Login invalido!'});
    }
    const isPasswordMatch = await bcrypt.compare(password, aplicador.password);
    if(!isPasswordMatch){
        throw new Error({ error:'Login invalido!'});
    }
    return aplicador;
};

const Aplicador =  mongoose.model('Aplicador',AplicadorSchema);

module.exports = Aplicador;