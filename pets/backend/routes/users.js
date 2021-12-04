const express = require('express');
const router = express.Router();
const {obtener, obtenerPorID, eliminar, insertar, credenciales} = require('../controllers/userController');

router.route('/')
.get(obtener);

router.route('/:id')
.get(obtenerPorID)
.delete(eliminar);

router.route('/insertar')
.post(insertar);

router.route('/credenciales')
.post(credenciales);


module.exports = router;