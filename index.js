const express = require("express")
const app = express()
app.use(require('cors')()) // 跨域
app.use(express.json())  //json格式
require('./routes')(app)
require('./db')(app)
app.listen(3000,()=>{
    console.log('app listening on port 3000')
})
