const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log("DB Connected")
});
const Schema = mongoose.Schema;

const User = mongoose.model('User', { 
    name: {
        type: String,
        required: true,
    },
    votes: {
        type:Number,
        default:0
    },
    challenges:{
        type:Number,
        default:0
    },
    expertin:{
        ds:Number,
        algo:Number,
        java:Number,
        python:Number,
        cpp:Number
      }
});

module.exports=User