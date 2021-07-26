const database = require('../models');

class PessoaController {
    static async pegaTodosVideos (req, res) {
        try {
            const todosOsVideos = await database.Videos.findAll();
            return res.status(200).json(todosOsVideos);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;