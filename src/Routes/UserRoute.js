const express=require('express');
const router=express.Router();
const AuthUser=require('../Controller/UserController');
// const login=require('../Controller/UserController')


router.post('/',AuthUser.createUser);
router.post('/login',AuthUser.login);


module.exports=router

