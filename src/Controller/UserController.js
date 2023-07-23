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
        const {_id,password,role}=req.body;
        console.log(_id,password,role);
        const FindUser=await UserModel.findOne({_id});
        if(FindUser){
            const PasswordCompare=await bcrypt.compare(password,FindUser.password);
            const user={
              role:role,
              password:password
            }
            if(PasswordCompare){
                const jwttoken=jwt.sign(user,process.env.JWT_SECRET);
                res.status(200).json({
                    status:'success',
                    result:jwttoken
                })
            }else{
              res.status(400).json({
                status:'failed',
                result:'Password does not match.'
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


exports.getUser=(async(req,res)=>{
  try{
      const FindUser=await UserModel.find({});
      if(FindUser){
              res.status(200).json({
                  status:'success',
                  result:FindUser
              })
      }
  }catch(err){
      console.log(err)
      res.status(500).json({
          status:'failure',
          result:err
      })
  }
})
