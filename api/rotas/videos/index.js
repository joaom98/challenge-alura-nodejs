const roteador = require('express').Router({mergeParams: true});
const Video = require('./Videos')

roteador.get('/', async (req, res) => {
    res.status(201);
    res.send();
});

module.exports = roteador;