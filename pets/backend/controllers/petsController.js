const petsController = {};
const pet = require('../models/pet');

petsController.obtener = async (request, response) =>{ await pet.find()
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json('Error: ' + err));
};

petsController.insertar = async (request, response) => {

    const newPet = new pet({
        nombre: request.body.nombre,
        raza: request.body.raza,
        genero: request.body.genero,
        edad: request.body.edad,
        perfil: request.body.perfil,
        tipo: request.body.tipo,
        adoptado: request.body.adoptado    
    });  
    //se valida si viene un archivo en la solicitud
    if (request.file) {
        //Se obtiene el nombre de la imagen
        const { filename } = request.file;
        newPet.setImgUrl(filename);
    }
  
        newPet.save()
    .then(() => response.json('Mascota agregada con éxito'))
    .catch(err => response.status(400).json('Error: ' + err));
};

petsController.eliminar = async(req, res) => {
    await pet.findByIdAndDelete(req.params.id)
      .then(() => res.status(201).json('Mascota eliminada con éxito'))
      .catch(err => res.status(500).json('Error: ' + err));
};

petsController.editar = async (request, response) => {
    
    const {nombre, raza, genero, edad, foto, perfil, tipo, adoptado} =request.body;    
      await pet.findByIdAndUpdate(request.params.id, { nombre, raza, genero, edad, foto, perfil, tipo, adoptado})
      .then(()=> response.json('Mascota actualizada con éxito'))
      .catch(error => response.status(400).json('Error: ', error));

}

petsController.obtenerPorID = async(request, response)=> {
     await pet.findById(request.params.id)
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json('Error: ' + err));;
};

module.exports = petsController;