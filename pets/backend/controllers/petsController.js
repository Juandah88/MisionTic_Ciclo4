const petsController = {};
const pet = require('../models/pet');
const { deleteImg } = require("../helpers/deleteImg");

petsController.obtener = async (request, response) => {
    await pet.find()
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
        newPet.foto = newPet.setImgUrl(filename);
    }
    newPet.save()
        .then(() => response.json(newPet))
        .catch(err => response.status(400).json('Error: ' + err));
};

petsController.eliminar = async (request, response) => {

    try {
        //Se consulta si existe la mascota a eliminar        
        let mascotaEncontrada = await pet.findById({ _id: request.params.id });
        if (!mascotaEncontrada)
            return response.status(404)
                .json({ ok: false, mensaje: 'Mascota no encontrada' })

        //Se elimina la foto de la mascota
        if (mascotaEncontrada.fotoNombre)
            deleteImg(mascotaEncontrada.fotoNombre);
        //Se elimina la mascota
        await mascotaEncontrada.deleteOne();
        response.json({
            ok: true,
            message: "la mascota se ha eliminado.",
        });
    }
    catch (error) {
        response.status(500).json({
            ok: false,
            message: error.message,
        });
    }
};

petsController.editar = async (request, response) => {

    const { nombre, raza, genero, edad, foto, perfil, tipo, adoptado } = request.body;
    await pet.findByIdAndUpdate(request.params.id, { nombre, raza, genero, edad, foto, perfil, tipo, adoptado })
        .then(() => response.json('Mascota actualizada con éxito'))
        .catch(error => response.status(400).json('Error: ', error));

}

petsController.obtenerPorID = async (request, response) => {
    await pet.findById(request.params.id)
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json('Error: ' + err));;
};

module.exports = petsController;