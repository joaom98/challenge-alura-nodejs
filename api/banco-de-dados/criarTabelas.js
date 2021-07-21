const ModeloTabela = require('../rotas/videos/ModeloTabelaVideo');

ModeloTabela
    .sync()
    .then( () => console.log('Tabela Videos criada com sucesso') )
    .catch(console.log);