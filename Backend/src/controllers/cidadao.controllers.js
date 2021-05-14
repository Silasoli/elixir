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

exports.returnAllCidadaos =  async(req,res)=>{
  Cidadao.find(function(error, cidadaos) {
     if (error) {
          res.send('Erro'+error);
     }
     res.json(cidadaos);
  });
};

exports.returnOneCidadao =  async(req,res)=>{
  Cidadao.findById(req.params.cidadao_id, function(error,cidadao){
    if (error) {
        res.send('Não encontrado');
    }
    res.json(cidadao);
  });
};

exports.returnEditCidadao =  async(req,res)=>{
  Cidadao.findById(req.params.cidadao_id, function(error,cidadao){
    if (error) {
        res.send('Não encontrado');
    }
    cidadao.dataDose1 = req.body.dataDose1;
    cidadao.horaDose1 = req.body.horaDose1;
    cidadao.dadosagen1 = req.body.dadosagen1;
    cidadao.local = req.body.local;
    cidadao.save(function(error){
        if (error) {
            res.send('Erro ao atualizar o produto')
        }
        res.json({ message: 'Atualizado com sucesso'})
    });
  });
};

exports.returnEditCidadao2 =  async(req,res)=>{
  Cidadao.findById(req.params.cidadao_id, function(error,cidadao){
    if (error) {
        res.send('Não encontrado');
    }
    cidadao.dataDose2 = req.body.dataDose2;
    cidadao.horaDose2 = req.body.horaDose2;
    cidadao.dadosagen2 = req.body.dadosagen2;
    cidadao.local = req.body.local;
                      
    cidadao.save(function(error){
        if (error) {
            res.send('Erro ao atualizar o produto')
        }
        res.json({ message: 'Atualizado com sucesso'})
    });
  });
};


//VERIFICAR HORARIOS

exports.returnverifyExist =  async(req,res)=>{
    try {
      let isAgen = await Cidadao.find({ dadosagen1: req.body.dadosagen1 });
      console.log(isAgen);
      if (isAgen.length>=1) {
          return res.status(401).json({message: 'Data está sendo usado'})
      }
      res.status(201).json({message:'Data não cadastrada' });
  } catch (err) {
      res.status(400).json({ message:'Data cadastrada '+err});
  }
} 

exports.returnverifyExist2 =  async(req,res)=>{
    try {
      let isAgen = await Cidadao.find({ dadosagen2: req.body.dadosagen2 });
      console.log(isAgen);
      if (isAgen.length>=1) {
          return res.status(401).json({message: 'Data está sendo usado'})
      }
      res.status(201).json({message:'Data não cadastrada' });
  } catch (err) {
      res.status(400).json({ message:'Data cadastrada '+err});
  }
} 

// ATUALIZAR STATUS DE VACINAÇÃO

exports.attStatus1 =  async(req,res)=>{
  Cidadao.findById(req.params.cidadao_id, function(error,cidadao){
    if (error) {
        res.send('Não encontrado');
    }
    cidadao.vacinado1 = req.body.vacinado1;
                     
    cidadao.save(function(error){
        if (error) {
            res.send('Erro ao atualizar o produto')
        }
        res.json({ message: 'Atualizado com sucesso'})
    });
  });
};

exports.attStatus2 =  async(req,res)=>{
  Cidadao.findById(req.params.cidadao_id, function(error,cidadao){
    if (error) {
        res.send('Não encontrado');
    }
    cidadao.vacinado2 = req.body.vacinado2;
                     
    cidadao.save(function(error){
        if (error) {
            res.send('Erro ao atualizar o produto')
        }
        res.json({ message: 'Atualizado com sucesso'})
    });
  });
};