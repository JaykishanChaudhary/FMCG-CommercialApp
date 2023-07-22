const UserModel = require("../Models/UserModal");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config()

exports.createUser=(async (req, res) => {
  try {
    const CreateNewUser = new UserModel(req.body);
    const NewUser = await CreateNewUser.save();
    res.status(200).json({
      status: "success",
      result: NewUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failure",
      result: err,
    });
  }
});

exports.login=(async(req,res)=>{
    try{
        const {_id,password}=req.body;
        console.log(_id,password);
        const FindUser=await UserModel.findOne({_id});
        if(FindUser){
            const PasswordCompare=await bcrypt.compare(password,FindUser.password);
            if(PasswordCompare){
                const jwttoken=jwt.sign(password,process.env.JWT_SECRET);
                res.status(200).json({
                    status:'success',
                    result:jwttoken
                })
            }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'failure',
            result:err
        })
    }
})
