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

// antes de ejecutar la insertar se envia los datos por el middleware 'ImgUpload'
router.post('/crear', upload.single('foto'), insertar);


router.put('/:id/editar', upload.single('foto'), editar);
module.exports = router;