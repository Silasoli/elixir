const express = require('express');
const router =  express.Router();
const auth = require('../middlewares/auth');
const cidadaoController =  require('../controllers/cidadao.controllers');

// rota para criar um novo cidadão
router.post('/register',cidadaoController.registerNewUser);

//
router.post('/login', cidadaoController.loginCidadao);

router.get('/cidadaoProfile', auth, cidadaoController.returnCidadaoProfile);

module.exports = router;