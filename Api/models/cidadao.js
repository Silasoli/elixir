var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CidadaoSchema = new Schema({
    nomeCompleto:String,
    dataNascimento:String,
    CPF:String,
    tel:String,
    email:String,
    senha:String
});

module.exports = mongoose.model('Cidadao' , CidadaoSchema);