const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

/* routing */
const mainRouter = require('./routes/main');
app.use('/',mainRouter);


/* settings */
app.use(express.static('public'));



app.listen(port,()=> console.log('Servidor corriendo en el puerto https://localhost:' + port))