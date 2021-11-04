import {Schema, model} from 'mongoose';

const petSchema = new Schema({
    nombre: {type: String, required:true},
    raza: {tpe:String, required:true},   
    genero: {type: String, required:true},
    edad:   {type:Number, required:true, min: 0, max: 99}, 
    foto:
    {
        data: Buffer,
        contentType: String,
        required: true

    },
    perfil: String,
    Adoptado: {
        type: Boolean,
        default: false,
        required: true
    }
}); 