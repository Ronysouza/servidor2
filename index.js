const express = require('express')
const path = require('path')
const http = require('http') 
    
    //instanciando a biblioteca socket
const socketIO = require('socket.io')


const app = express()
const server = http.createServer(app)
  
//chamando a biblioteca dentro do servidor
const io = socketIO(server)

server.listen(3000)
app.use(express.static(path.join(__dirname, 'public'))) 

 
console.log(io)
    
//fazendo conexão com socket
io.on('connection',(socket)=>{

    console.log('Conexão detectada...')
        
    // recebendo mensagem do cliente com o nome join-request
  socket.on('join-request', (username)=>{
    
     
    console.log(username)

    
       

  })





})






