const express=require('express');
const router=express.Router();
const User=require('../Controller/UserController');
// const login=require('../Controller/UserController')
const Admin=require('../MiddleWare/AdminAuth');
console.log(Admin);

router.post('/CreateUser',User.createUser);
router.post('/login',User.login);
router.get('/getUser',Admin.AdminAuth,User.getUser);

module.exports=router

