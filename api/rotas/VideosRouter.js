const { Router } = require('express');
const VideoController = require('../controllers/VideoController');

const roteador = Router();

roteador.get('/videos', VideoController.pegaTodosVideos);

module.exports = roteador;