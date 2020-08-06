const mongoose = require('mongoose');
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
      }
});

module.exports=User