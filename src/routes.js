const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const UserController = require('./controllers/UserController.js')
 

router.get('/',UserController.getBarra)
router.get('/user',UserController.getUser)
//router.get('/atualizou',UserController.getAtualizou)
router.get('/getuser',UserController.funcaoGetUse) 
router.post('/login',bodyParser.urlencoded({extended:false}),UserController.getLogin)
router.post('/addUser',bodyParser.urlencoded({extended:false}),UserController.addUser)

module.exports = router


