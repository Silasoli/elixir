var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Cidadao = require('./models/cidadao');
// const cidadao = require('./models/cidadao');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb:mongodb+srv://elixir:elixir123@elixir.i2kk5.mongodb.net/elixir?retryWrites=true&w=majority',{
//     useMongoClient:true
// });

mongoose.connect('mongodb://localhost/elixir')

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

var port =  process.env.port || 8000;



var router = express.Router();

router.use(function(req, res, next) {
    console.log('Movimentação detectada')
    console.log('Tentando Conexão')
    next(); 
 });
 

router.get('/', function(req,res){
        res.json({ message: "Bem vindo ao Elixir"})
});

// get all and post
router.route('/cidadaos')

//Criar cidadao 
    .post(function(req,res){
        var cidadao =  new Cidadao();

        
        //set fields
        cidadao.nomeCompleto = req.body.nomeCompleto;
        // cidadao.dataNascimento = req.body.dataNascimento;
        // cidadao.CPF = req.body.CPF;
        // cidadao.tel = req.body.tel;
        cidadao.email = req.body.email;
        cidadao.senha = req.body.senha;
        
        cidadao.save(function(error){
            if(error)
                res.send('Erro ao tentar cadastrar'+ error);
            
                res.json({ message:'Cadastrado com sucesso'});    
        })
    })
//Selecionar todos os cidadãos
    .get(function(req, res){
        Cidadao.find(function(error, cidadaos){
            if (error) {
                res.send('Erro ao tentar mostrar dados'+error);
            }
            res.json(cidadaos)
            
        })
    });
//rotas que utilizam "ID"
router.route('/cidadaos/:cidadao_id')
  
    //Selecionar
    .get(function(req,res) {
        
        Cidadao.findById(req.params.cidadao_id, function (error,cidadaos) {
                if (error) {
                        res.send('Cidadão não encontrado.'+error);
                }
                res.json(cidadaos)
        })
    })
    //Atualizar por "ID"
    .put(function(req,res){
        
        //Procurar id
        Cidadao.findById(req.params.cidadao_id, function (error,cidadaos) {
            if(error){
                res.send('Cidadão não encontrado.'+error);  
            }
            
            //Atualizar campos
            cidadaos.nomeCompleto = req.body.nomeCompleto;
            // cidadaos.dataNascimento = req.body.dataNascimento;
            // cidadaos.CPF = req.body.CPF;
            // cidadaos.tel = req.body.tel;
            cidadaos.email = req.body.email;
            cidadaos.senha = req.body.senha;
            //Salvar
            cidadaos.save(function(error) {
                if (error) {
                    res.send('Erro ao tentar atualizar'+error)
                }
                res.json({ message: 'Cadastro atualizado' })
            })
        })
    })

    //Excluir por "ID"
    .delete(function (req, res) {
        
        Cidadao.remove({
            _id: req.params.cidadao_id
           }, function (error) {
               if(error){
                   res.send('Cidadão não encontrado.'+error)
               }
               res.json({ message: 'Cadastro Excluido' })
           }
        );
    })

app.use('/api',router);

app.listen(port);
console.log("iniciando na porta "+port);
