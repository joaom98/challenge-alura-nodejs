const roteador = require('express').Router({mergeParams: true});
const TabelaVideos = require('./TabelaVideos');
const Video = require('./Videos')

roteador.get('/', async (req, res) => {
    const resultados = await TabelaVideos.listar();
    res.status(200);
    res.send(
        JSON.stringify(resultados)
    );
});

module.exports = roteador;