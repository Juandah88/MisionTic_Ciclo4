const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
    {
        nombre: {type: String, required:true, index: true},
        raza: {type:String, required:true, index: true , },   
        genero: {type: String, required:true, index: true},
        edad:   {type:Number, required:true, min: 0, max: 99}, 
        foto:
        {
            data: Buffer,
            contentType: String
        },
        perfil: String,
        //Se guarda un nmero para  saber si es:
        // 1 = Canino
        // 0 =  Felino
        tipo: {type: Number, min:0, max:1, index:true},
        Adoptado: {
            type: Boolean,
            default: false,
            index:true
        },
    },
    {
        timestamps: true,
    }
); 
const Pets = mongoose.model('Pet', petSchema);
module.exports = Pets;