const{ Sequelize, DataTypes }= require('sequelize')
const db = require('../dbSequelize')

 const User = db.define('User', {
    // Model attributes are defined here
    id: {
        primaryKey: true,
       type: Sequelize.INTEGER
        
    },
    nome: {
        
        type: Sequelize.STRING 
     },
     login: {
        
      type: Sequelize.STRING 
   },
     senha: {
        
        type: Sequelize.STRING 
     },
     rua: {
        
        type: Sequelize.STRING 
     },
     bairro: {
        
        type: Sequelize.STRING 
     },
     cidade: {
        
        type: Sequelize.STRING 
     },
     estado: {
        
        type: Sequelize.STRING 
     }
     
  }, {
    tableName: 'usuario',
    timestamps: false
  });

  
module.exports = User