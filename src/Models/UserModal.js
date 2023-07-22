const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

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

UserSchema.pre('save',async function (next){
    const Salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,Salt)
    next()
})


const UserModel=mongoose.model('FMCG-CommercialApp',UserSchema);

module.exports=UserModel;