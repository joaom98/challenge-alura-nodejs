const express = require('express')
const config = require('config');
const roteador = require('./rotas');

const app = express();

roteador(app);

app.listen(config.get('api.port'), () => console.log("ouvindo na porta " + config.get('api.port').toString() ));