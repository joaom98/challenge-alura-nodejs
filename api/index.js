const express = require('express')
const app = express();


app.use(express.json());

const roteador = require('./rotas/videos');
app.use('/api/videos', roteador);

app.listen(3000, () => console.log("ouvindo na porta 3000"));