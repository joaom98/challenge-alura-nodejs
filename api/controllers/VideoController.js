const database = require('../models');

class VideoController {
    static async pegaTodosVideos (req, res) {
        try {
            const todosOsVideos = await database.Videos.findAll();
            return res.status(200).json(todosOsVideos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmVideo (req, res) {
        try {
            const { videoId } = req.params;
            const umVideo = await database.Videos.findOne( { 
                where: {
                     id: Number(videoId) 
                    }
                });
            return res.status(200).json(umVideo);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaUmVideo (req, res) {
        const novoVideo = req.body;

        const regexURL = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

        if ( !regexURL.test(novoVideo.url) ){
            return res.status(400).json("URL Inválida");
        }

        try {
            const novoVideoCriado = await database.Videos.create(novoVideo);
            return res.status(200).json(novoVideoCriado);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaUmVideo (req, res) {
        try {
            const { videoId } = req.params;
            const umVideo = await database.Videos.findOne( { 
                where: {
                     id: Number(videoId) 
                    }
                });
            await umVideo.destroy();
            return res.status(200).json("Video deletado com sucesso");
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUmVideo (req, res) {
        const { videoId } = req.params;
        const novosDados = req.body;
        console.log("novosDados");
        try {

            const umVideo = await database.Videos.update( novosDados, { 
                where: {
                     id: Number(videoId) 
                    }
                });

            const videoAtualizado = await database.Videos.findOne( { where: { id: videoId }});
            return res.status(200).json(videoAtualizado);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = VideoController;