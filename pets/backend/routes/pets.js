const express = require('express');
const router = express.Router();
const upload = require("../middlewares/ImgUpload");

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


  router.post("/crear", upload.single("img"), insertar);
// router.route('/crear')
//   .post(insertar);

router.route('/:id/editar')
  .put(editar);

module.exports = router;