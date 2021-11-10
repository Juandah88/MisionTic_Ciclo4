const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

//Obtener todos
router.get('/mascotas', async (request, response) => {
    await Pet.find()
    .then(users => response.json(users))
    .catch(err => response.status(400).json('Error: ' + err));
});

//Obtener por ID
router.get('/mascotas/:id', async(request, response)=>
{
     await Pet.findById(request.params.id)
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json('Error: ' + err));;
});

//Eliminar
router.delete('/mascotas/:id', async(req, res) => {
    await Pet.findByIdAndDelete(req.params.id)
      .then(() => res.json('Mascota eliminada con exito'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //Agregar
router.post('/mascotas/agregar',async (request, response) => {
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
    .then(() => response.json('Mascota agregada con exito'))
    .catch(err => response.status(400).json('Error: ' + err));
});

router.post("/mascotas/:id/editar", async (request, response) => {
    
    const {nombre, raza, genero, edad, foto, perfil, adoptado} =request.body;    
      await Pet.findByIdAndUpdate(request.params.id, { nombre, raza, genero, edad, foto, perfil, adoptado})
      .then(()=> response.json('Mascota actualizada con exito'))
      .catch(error => response.status(400).json('Error: ', error));
      

  });
module.exports = router;