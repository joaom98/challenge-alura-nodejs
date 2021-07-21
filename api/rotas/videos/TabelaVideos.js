const Modelo = require('./ModeloTabelaVideo');

module.exports = {
    listar() {
        return Modelo.findAll({ raw: true })
    },
    inserir (video) {
        return Modelo.create(video); 
    }
}