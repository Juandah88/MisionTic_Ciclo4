const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    nombre: {type: String, required:true, index: true},
    raza: {type:String, required:true, index: true},   
    genero: {type: String, required:true, index: true},
    edad:   {type:Number, required:true, min: 0, max: 99}, 
    foto:
    {
        data: Buffer,
        contentType: String
    },
    perfil: String,
    Adoptado: {
        type: Boolean,
        default: false,
        required: true
    }
}); 
const Pets = mongoose.model('Pet', petSchema);
module.exports = Pets;