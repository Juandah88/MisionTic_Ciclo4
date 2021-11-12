const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

//Obtener todos
router.get('api/mascota', async (request, response) => {
    await Pet.find()
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json('Error: ' + err));
});

//Obtener por ID
router.get('api/mascota/:id', async(request, response)=>
{
     await Pet.findById(request.params.id)
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json('Error: ' + err));;
});

//Eliminar
router.delete('api/mascota/:id', async(req, res) => {
    await Pet.findByIdAndDelete(req.params.id)
      .then(() => res.json('Mascota eliminada con éxito'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //Agregar
router.post('api/mascota/agregar',async (request, response) => {
  const newPet = new Pet({
      nombre: request.body.nombre,
      raza: request.body.raza,
      genero: request.body.genero,
      edad: request.body.edad,
      foto: request.body.foto,
      perfil: request.body.perfil,
      adoptado: request.body.adoptado    
  });  

     newPet.save()
    .then(() => response.json('Mascota agregada con éxito'))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.post('api/mascota/:id/editar', async (request, response) => {
    
    const {nombre, raza, genero, edad, foto, perfil, adoptado} =request.body;    
      await Pet.findByIdAndUpdate(request.params.id, { nombre, raza, genero, edad, foto, perfil, adoptado})
      .then(()=> response.json('Mascota actualizada con éxito'))
      .catch(error => response.status(400).json('Error: ', error));
      

  });
module.exports = router;