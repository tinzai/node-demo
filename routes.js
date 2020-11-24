module.exports = app =>{
    const express = require("express")
    const router = express.Router()
    const Business = require('./models/business')
    router.post('/businessApi',async(req,res)=>{
        const model = await Business.create(req.body) 
        res.send({
            statu:200,
            ...model._doc
        })
    })
    router.get('/businessApi',async(req,res)=>{
        const model = await Business.find().limit(100) 
        res.send(model)
    })
    router.get('/businessApi/:id',async(req,res)=>{
        const model = await Business.findById(req.params.id)
        res.send(model)
    })
    app.use('/api',router)
}