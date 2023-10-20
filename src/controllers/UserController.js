const {req, response} = require('express')
 
 const user = require('../models/User');
 



module.exports = {
     


    getBarra: (req, res)=>{
        
        let json = {error:'acessando so a rota com uma barra', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },


    getUser: (req, res)=>{
        
        let json = {error:'rfsdfdsfsdfsf', result:[]};
        
        //let usuarios = await UserService.getUser() 
        
    console.log('json retornado no console')

        res.json(json)

 
    },



    

    funcaoGetUse: async(req, res)=>{
            
           
     let users = await user.findAll()
    
     res.send(JSON.stringify(users))
     console.log('result:',JSON.stringify(users))



    }, 
  


    getLogin:async (req,res)=>{
         
 
        let json = await user.findAll({
            where: {
            nome:req.body.nome,
            login:req.body.login
            }   
        }) 

        
        res.send(JSON.stringify(json.body))
   
       

  },
  addUser:async (req,res)=>{
     
              //verifica se tem usuario no banco
    let result = await user.findAll({
        where: {         
        login:req.body.login
        }   
    })
   
     
    if(result.length < 1){
         await user.create({  
            id_afiliado:req.body.id_afiliado, 
            status:req.body.status,       
            nome:req.body.nome,
            login:req.body.login,
            senha:req.body.senha,
            rua:req.body.rua,
            bairro:req.body.bairro,
            cidade:req.body.cidade,
            estado:req.body.estado
            
              
        }) 

           
        res.send({result:'usuário cadastrado com sucesso'})
        

    }else{
    
        res.send({error:'ja existe um usuário com este cpf cadastrado'})

    }
     

    

} 



  
    

    

}
