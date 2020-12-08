module.exports = app =>{
    const express = require("express")
    const router = express.Router({
        mergeParams:true
    })

    router.post('/',async(req,res)=>{
        const model = await req.Model.create(req.body) 
        res.send({
            statu:200,
            ...model._doc
        })
    })
    
    router.get('/',async(req,res)=>{
        const model = await req.Model.find().limit(100) 
        res.send(model)
    })

    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    router.delete('/:id',async(req,res)=>{ 
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            statu:200,
            success:true
        })
    })

    app.use('/api/rest/:resource',async(req,res,next)=>{
        const modeName = require('inflection').classify(req.params.resource)
        req.Model = require(`../models/${modeName}`)
        next()
    },router)

    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../uploads'})
    app.use('/api/img/upload',upload.single('file'),async(req,res)=>{
        const file = req.file                                        
        res.send({
            statu:200,
            url:`http://localhost:3333/uploads/${file.filename}`,
            ...file
        })
    })
}