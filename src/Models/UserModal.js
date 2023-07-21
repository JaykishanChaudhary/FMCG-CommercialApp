const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    username: 
    { 
        type: String,
        required: true 
    },
    email: 
    { 
        type: String, 
        required: true,
         unique: true 
    },
    password: 
    { 
        type: String, 
        required: true 
    },
    age: 
    { 
        type: Number 
    },
    createdAt: 
    { 
        type: Date, 
        default: Date.now 
    },
})


const UserModel=mongoose.model('FMCG-CommercialApp',UserSchema);

module.exports=UserModel;