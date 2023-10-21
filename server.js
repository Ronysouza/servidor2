require('dotenv').config({path:'dot.env'})
const express = require('express')
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')

 

const routes = require('./src/routes')
const server = express()
 server.use(cors())  



  


  
 
   
  
 server.use('/',routes)


 server.use(bodyParser.urlencoded({extended:false}))
 server.listen(process.env.PORT, ()=>{
    
     
   

    console.log('servidor rodando1234')


 })







