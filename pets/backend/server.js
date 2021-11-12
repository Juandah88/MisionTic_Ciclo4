const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port  = process.env.port || 5000;

//MiddleWare
app.use(express.json());

const uri = 'mongodb+srv://admin:Admin123@clusterlibreria.1lv3v.mongodb.net/DBPets?authSource=admin&replicaSet=atlas-lhwkid-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Base de datos conectada satisfactoriamente");
})


//Router
app.use(require('./routes/pets'));
app.use(require('./routes/users.js'))


app.listen(port, () => console.log('Servidor corriendo en el puerto: ' + port));
