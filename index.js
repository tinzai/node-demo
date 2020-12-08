const express = require("express")
const app = express()
app.use(require('cors')()) // 跨域
app.use(express.json())  //json格式
app.use('/uploads',express.static(__dirname + "/uploads"))
require('./routes')(app)
require('./plugins/db')(app)
app.listen(3333,()=>{
    console.log('app listening on port 3333')
})
