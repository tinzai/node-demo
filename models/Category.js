const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{type:String},
    url:{type:String},
    classId:{type:mongoose.SchemaTypes.ObjectId,ref:'Classification'},
    describe:{type:String},
})
module.exports = mongoose.model('Category',schema)