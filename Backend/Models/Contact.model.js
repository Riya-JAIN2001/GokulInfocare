const mongoose = require("mongoose")
const ContactSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
        
    address:{
 type:String,
            required:true 
    } 
    
})

ContactSchema.index({ phoneNumber: 1 }, { unique: true });
ContactSchema.index({ email: 1 }, { unique: true });
const ContactModel = mongoose.model("contact",ContactSchema)

module.exports=ContactModel