const express = require('express');
const router = express.Router();
const {obtener, obtenerPorID, eliminar, insertar} = require('../controllers/userController');

router.route('/')
.get(obtener);

router.route('/:id')
.get(obtenerPorID)
.delete(eliminar);

router.route('/insertar')
.post(insertar)


module.exports = router;