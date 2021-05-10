const Cidadao = require('../models/cidadao.models');

// async e await
exports.registerNewUser = async(req, res) =>{
    try {
        let isCidadao = await Cidadao.find({ email: req.body.email });
        console.log(isCidadao);

         if (isCidadao.length>=1) {
             return res.status(409).json({message: 'Esse email  já está sendo usado'})
             
         }

         const newCidadao = new Cidadao(req.body);
         const cidadao = await newCidadao.save();
         const token = await newCidadao.generateAuthToken();
         res.status(201).json({message:'Cidadão cadastrado com sucesso',cidadao, token });
    } catch (err) {
        res.status(400).json({ message:'Cidadão não cadastrado pois: '+err});
    }
};

exports.loginCidadao = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const cidadao = await Cidadao.findByCredentials(email,password);

     if (!cidadao) {
       return res.status(401).json({error:'Erro ao realizar login'});
     }
     
     const token = await cidadao.generateAuthToken();
     res.status(201).json({message:'Login efetuado',cidadao, token});
  } catch (err) {
    res.status(400).json({ err : err});    
  }
};
  

exports.returnCidadaoProfile = async(req,res)=>{
    await res.json(req.cidadaoData);
};
