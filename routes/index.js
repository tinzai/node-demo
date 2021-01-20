module.exports = app =>{
    const express = require("express")
    const router = express.Router({
        mergeParams:true
    })
    // 通用CRUD接口
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

    // 图片上传api
    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../uploads'})
    app.post('/api/img/upload',upload.single('file'),async(req,res)=>{
        const file = req.file                                        
        res.send({
            statu:200,
            url:`http://localhost:3333/uploads/${file.fileName}`,
            ...file
        })
    })

    // 注册api
    app.post('/api/register',async(req,res)=>{
        const { username, password} = req.body
        const AdminUser = require('../models/AdminUser')
        const user = await AdminUser.findOne({username}).select('+password')
        if(!user){
            const model = await AdminUser.create(req.body) 
            return res.send({
                msg:'注册成功',
                ...AdminUser._doc
            })
        } else{
            return res.status(422).send({
                msg:'用户已存在'
            })
        }
    })

    // 登录api
    app.post('/api/login',async(req,res)=>{
        const { username, password} = req.body
        // 1.找用户
        const AdminUser = require('../models/AdminUser')
        const user = await AdminUser.findOne({username}).select('+password')
        if(!user){
            return res.status(422).send({
                msg:'用户不存在'
            })
        }
        // 2.验证密码
        const isVslid = require('bcrypt').compareSync(password,user.password)
        if(!isVslid){
            return res.status(422).send({
                msg:'密码错误'
            })
        }
        // 3.返回token
        const jwt = require('jsonwebtoken')
        const token = jwt.sign({
            id:user._id,
            _id:user._id,
        },app.get('secret'))
        res.send({
            token,
            username:username,
            userId:user._id
        })
    })
}