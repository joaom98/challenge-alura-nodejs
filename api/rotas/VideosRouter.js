const { Router } = require('express');
const VideoController = require('../controllers/VideoController');

const roteador = Router();

roteador.get('/api/videos', VideoController.pegaTodosVideos);
roteador.get('/api/videos/:videoId', VideoController.pegaUmVideo);
roteador.post('/api/videos', VideoController.criaUmVideo);
roteador.delete('/api/videos/:videoId', VideoController.deletaUmVideo);
roteador.put('/api/videos/:videoId', VideoController.atualizaUmVideo);

module.exports = roteador;