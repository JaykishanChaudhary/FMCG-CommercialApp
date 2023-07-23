const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.AdminAuth=async(req,res,next)=>{
    if(!req.headers.authorization||!req.headers.authorization.startsWith('Bearer ')){
        return res.status(401).json({
            status:'failure',
            massege:'Unautherised, Please provide jwt.'
        })
    }

    const Token=req.headers.authorization.replace('Bearer ','');

    try{
        const DecodedToken=jwt.verify(Token,process.env.JWT_SECRET);
        console.log(DecodedToken);
        if(DecodedToken.role==="admin"){
            next()
        }else{
            res.status(401).json({
                status:'failed',
                message:'Unautherized ,Only admin can access'
            })
        }
    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'failed',
            result:err
        })
    }
}