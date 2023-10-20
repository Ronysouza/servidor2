const { Sequelize, Model, DataTypes } = require('sequelize');

const dotenv = require('dotenv')
dotenv.config()

 

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS, {
   host: process.env.DB_HOST,
    dialect: 'mysql'
    //port:3306
  }); 

  sequelize.authenticate().then(()=>{
    console.log('conectado com o banco de dados com sucesso')

  }).catch(()=>{

    console.log('[ERROR:] conexao com banco de dados')

  })

  module.exports = sequelize

  //banco hostgator      r7webd73_r7block
  //usuario hostgator    r7webd73_r7blockUser
  //senha hostgator    roteador35677
  //senha hostgator    br1090