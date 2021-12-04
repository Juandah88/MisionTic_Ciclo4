//Se inicializan variables de entorno
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Settings
const port  = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + "/storage/imgs"))
//MiddleWare
app.use(express.json());
app.use(cors());

//Se obtiene la URL de Atlas si no ejecuta en  local
const uri = process.env.ATLAS_URI ?  process.env.ATLAS_URI : 'mongodb://localhost/LocalPets'
//Se conecta a la base de datos
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Base de datos conectada satisfactoriamente");
})

//METODO CREDENCIALES
async function findData(collectionName, filter ){
    try {
        let collection = connection.collection(collectionName);
        let cursor = collection.find(filter);
        let result = [];
        let currentDocument = await cursor.next();
        while(currentDocument){
            result.push(currentDocument);
            currentDocument = await cursor.next();
        }
        return result
      } catch (ex) {
        return null;
      }
}


//Router
app.use('/api/mascotas', require('./routes/pets'));
app.use('/api/usuarios', require('./routes/users.js'))

//Se inicializa el servidor
app.listen(port, () => console.log('Servidor corriendo en el puerto: ' + port));

module.exports.findData = findData;