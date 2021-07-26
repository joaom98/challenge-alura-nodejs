'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Videos', [
      {
        titulo: "Rick Astley - Never Gonna Give You Up",
        descricao: "Rick Astley's official music video for “Never Gonna Give You Up” ",  
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "a-ha - Take On Me (Vídeo oficial)",
        descricao: "Assista ao videoclipe oficial do a-ha Take On Me! Mais uma vez: The Ultimate a-ha, incluindo os maiores hits + remixes raros e inéditos, já está disponível! Obtenha sua cópia aqui: ",  
        url: 'https://www.youtube.com/watch?v=djV11Xbc914',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
