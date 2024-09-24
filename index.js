
const express = require('express');

const app = express();
// Definir el puerto en el que correrá el servidor
const PORT = 3000;
// Ruta básica para el endpoint raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express en el puerto 3000!');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});