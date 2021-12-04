"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/userController'),
    obtener = _require.obtener,
    obtenerPorID = _require.obtenerPorID,
    eliminar = _require.eliminar,
    insertar = _require.insertar,
    credenciales = _require.credenciales;

router.route('/').get(obtener);
router.route('/:id').get(obtenerPorID)["delete"](eliminar);
router.route('/insertar').post(insertar);
router.route('/credenciales').post(credenciales);
module.exports = router;