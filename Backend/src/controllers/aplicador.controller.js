const Aplicador = require('../models/aplicador.models');

// async e await
exports.registerNewAplicador = async(req, res) =>{
    try {
        let isAplicador = await Aplicador.find({ email: req.body.email });
        console.log(isAplicador);

         if (isAplicador.length>=1) {
             return res.status(409).json({message: 'Esse email  já está sendo usado'})
             
         }

         const newAplicador = new Aplicador(req.body);
         const aplicador = await newAplicador.save();
         const token = await newAplicador.generateAuthToken();
         res.status(201).json({message:'Aplicador cadastrado com sucesso',aplicador, token });
    } catch (err) {
        res.status(400).json({ message:'Aplicador não cadastrado pois: '+err});
    }
};

exports.loginAplicador = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const aplicador = await Aplicador.findByCredentials(email,password);

     if (!aplicador) {
       return res.status(401).json({error:'Erro ao realizar login'});
     }
     
     const token = await aplicador.generateAuthToken();
     res.status(201).json({message:'Login efetuado',aplicador, token});
  } catch (err) {
    res.status(400).json({ err : err});    
  }
};
  

exports.returnAplicadorProfile = async(req,res)=>{
    await res.json(req.aplicadorData);
};

exports.returnAllAplicadores =  async(req,res)=>{
//     Aplicador.find(function(error, aplicadores) {
//      if (error) {
//           res.send('Erro'+error);
//      }
//      res.json(aplicadores);
//   });
console.log('oi');
};

exports.returnOneAplicador =  async(req,res)=>{
    Aplicador.findById(req.params.aplicador_id, function(error,aplicador){
    if (error) {
        res.send('Não encontrado');
    }
    res.json(aplicador);
  });
};



