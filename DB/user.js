const mongoose = require('mongoose');

const user= new monoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type: String
    }
});

module.exports =User=mongoose.model('user',user);