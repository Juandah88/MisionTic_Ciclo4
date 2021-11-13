const express = require('express');
const router = express.Router();
const user = require('../models/user');


//router.route().post().get()
//Obtener todos
router.get('/', async (request, response) => {
  await user.find()
  .then(users => response.json(users))
  .catch(err => response.status(400).json('Error: ' + err));
});

//Obtener por ID
router.get('/:id', async(request, response)=>
{
     await user.findById(request.params.id)
    .then(user => response.json(user))
    .catch(err => response.status(400).json('Error: ' + err));;
});


//Eliminar
router.delete('/:id', async(req, res) => {
    await user.findByIdAndDelete(req.params.id)
      .then(() => res.json('usuario eliminado con éxito'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//Creación de usuarios
router.post('/crear', async(request, response) => {
    const {email, password, password_confirm} = request.body;
    //Se valida que el usuario haya ingresado las contraseñas iguales
    if(password != password_confirm){
        response.json('Las contraseñas no coinciden');
    }
    //Se valida que el usuario no este creado
    const emailUser = await user.findOne({ email: email });
    if (emailUser) {
        response.json('El usario ya esta creado');
    } else {

      // Saving a New User
      const newUser = new user({ email, password });
      //Se encripta la contraseña.
      newUser.password = await newUser.encryptPassword(password);

      await newUser.save()
      .then(() => response.json('Usuario agregado con éxito'))
      .catch(err => response.status(400).json('Error: ' + err));
      
    }
    })
    module.exports = router;