const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
    {
        nombre: {type: String, required:true, index: true},
        raza: {type:String, required:true, index: true , },   
        genero: {type: Number, min:0, max:1, index:true},
        edad:   {type:Number, required:true, min: 0, max: 99}, 
        foto:   { type: String  },
        fotoNombre:{type: String } ,
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


petSchema.methods.setImgUrl = function setImgUrl(filename) {
    const url = "https://backendmascotasmintic.azurewebsites.net/";
    this.foto = url + "public/" + filename;
    this.fotoNombre = filename;
    return this.foto
};


const Pets = mongoose.model('Pet', petSchema);
module.exports = Pets;