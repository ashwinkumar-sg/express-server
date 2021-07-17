//import React from 'react' - es6 module loaders
//common js module loader
const express=require('express')
const app = express()   
const  port = 3035
//application middleware
app.use(express.json())

app.get('/',function(req,res){
    if(req.url=='/')
    {
     res.send('welcome to the web')
    }
})
const users = [
    {id:1,name:'asg'},
    {id:2,name:'ram'}
]
//localhost:3035/users
app.get('/users',function(req,res){
    res.send(users)
})
//localhost:3035/users/2

app.get('/users/:id',function(req,res){
    const id = req.params.id  
    const user=users.find(user =>user.id ==id)
    if(user){
        res.json(user)
    }else{
        res.json({})
    }
    })

    app.post('/users/:id',(req,res)=>{
        person = req.body
        const fs = require('fs')
        fs.readFile('./data.json','utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                const users = JSON.parse(data)
                users.push(person)
                fs.writeFile('./data.json',JSON.stringify(users),()=>{
                    console.log('written to file')
                })
            }
        })
            })
    
    app.listen(port,()=>{
        console.log('listing on port',port)
    })


      
