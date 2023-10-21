require('dotenv').config({path:'dot.env'})
const express = require('express')
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')

 

const routes = require('./src/routes')
const server = express()
 server.use(cors())  



  
 const socketio = require('socket.io')
 const httpServer = http.createServer(server)
 const io = socketio(httpServer)
 httpServer.listen(process.env.PORT_SOCKET)

  
 
   
  
 server.use('/',routes)


 server.use(bodyParser.urlencoded({extended:false}))
 server.listen(process.env.PORT, ()=>{
    
     
   

    console.log('servidor rodando1234')


 })








 io.on('connection',(socket)=>{
    
   console.log('conectado com sucesso') 

   console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
      socket.disconnect()
      console.log('🔥: desconectado');
    });

    socket.on('join-request',(result)=>{

      console.log('testando conexao em tempo real',result.nome)
     

    })

     


 })
