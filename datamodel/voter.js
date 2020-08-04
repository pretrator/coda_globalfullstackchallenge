const mongoose=require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema=new mongoose.Schema({
    jwt:{
        type:String,
        unique:true,
    }
});
UserSchema.plugin(uniqueValidator);

module.exports=mongoose.model('voter',UserSchema);