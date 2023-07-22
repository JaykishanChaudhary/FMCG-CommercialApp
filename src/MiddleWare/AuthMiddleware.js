const jwt=require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

const jwtAuth=((req,res,next)=>{
    const token=req.headers['token'];
    console.log(token);
    jwt.verify(token,JWT_SECRET,(err,decodedtoken)=>{
        if(err){
            console.log(err);
            console.log(decodedtoken);
            res.status(404).json({
                status:'Authentication failed',
                result:err
            })
        }else{
            next()
        }
    })

})

module.exports=jwtAuth