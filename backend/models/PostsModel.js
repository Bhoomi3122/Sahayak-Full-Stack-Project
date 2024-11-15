const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Issue:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Solution:{
        type:String,
        required:false
    },
    Keywords:{
        type:String,
        required:false
    },
    IsAnonymous:{
        type:Boolean,
        required:true
    },
    Caution:{
        type:String,
        required:false
    }
},{timestamps:true})

module.exports =  mongoose.model('Posts',PostSchema)