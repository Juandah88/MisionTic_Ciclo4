const express = require('express');
const router = express.Router();

const {obtener
  , obtenerPorID
  , insertar
  , editar
  , eliminar} = require('../controllers/petsController')

//Obtener todos
 router.route('/')
 .get(obtener);

router.route('/:id')
  .get(obtenerPorID)
  .delete(eliminar);

router.route('/crear')
  .post(insertar);

router.route('/:id/editar')
  .put(editar);

module.exports = router;