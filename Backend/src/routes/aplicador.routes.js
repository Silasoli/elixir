const express = require('express');
const router =  express.Router();
const auth = require('../middlewares/authAp');
const aplicadorController =  require('../controllers/aplicador.controller');
const Aplicador = require('../models/aplicador.models');


// rota para criar um novo cidadão
router.post('/register/aplicador',aplicadorController.registerNewAplicador);

//login
router.post('/login/aplicador', aplicadorController.loginAplicador);
//
router.get('/aplicadorProfile', auth, aplicadorController.returnAplicadorProfile);
//

router.get('/aplicadores', aplicadorController.returnAllAplicadores)

router.get('/aplicadores/:aplicador_id', aplicadorController.returnOneAplicador)

// router.put('/aplicadores/:aplicador_id', aplicadorController.returnEditAplicador)


module.exports = router;