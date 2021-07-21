const express = require('express')
const app = express();
const config = require('config');

app.use(express.json());

const roteador = require('./rotas/videos');
app.use('/api/videos', roteador);

app.listen(config.get('api.port'), () => console.log("ouvindo na porta " + config.get('api.port').toString() ));