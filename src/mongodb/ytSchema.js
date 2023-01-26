import mongoose from 'mongoose'

const schema = mongoose.Schema({
    
    name:{type:String,required:true},
    link:{type:String,required:true},
    text:{type:String,required:true},
    

})

export const ytrmodal = mongoose.models.youtube || mongoose.model('youtube',schema)