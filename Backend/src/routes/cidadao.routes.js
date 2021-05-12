const express = require('express');
const router =  express.Router();
const auth = require('../middlewares/auth');
const cidadaoController =  require('../controllers/cidadao.controllers');
const Cidadao = require('../models/cidadao.models');


// rota para criar um novo cidadão
router.post('/register',cidadaoController.registerNewUser);

//login
router.post('/login', cidadaoController.loginCidadao);
//
router.get('/cidadaoProfile', auth, cidadaoController.returnCidadaoProfile);
//
router.get('/cidadaos', cidadaoController.returnAllCidadaos)

router.get('/cidadaos/:cidadao_id', cidadaoController.returnOneCidadao)

router.put('/cidadaos/:cidadao_id', cidadaoController.returnEditCidadao)

router.put('/cidadaos2/:cidadao_id', cidadaoController.returnEditCidadao2)

module.exports = router;