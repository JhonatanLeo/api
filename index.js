import express from 'express';
import fs from 'fs';

//creando el objeto de la app
const app = express();

//Generando las funciones para la lectura de datos tipo json
const readData = () => {
  const data = fs.readFileSync("./db.json");
  console.log(JSON.parse(data));
}

readData();

//Definiendo una ruta y estableciendo funciones middleware
app.get('/', (req, res) => {
  res.send("Bienvenidos a mi primera API con Node JS-CHICLAYD");
});

//estableciendo el puerto de escucha
app.listen(3001, () => {
  console.log("El servidor esta funcionando correctamente en el puerto 3001");
});

  