const express=require('express');
const router=express.Router();
const User=require('../Controller/UserController');
// const login=require('../Controller/UserController')
const Admin=require('../MiddleWare/AdminAuth');
console.log(Admin);

/**
 * @swagger
 * /CreateUser:
 *   get:
 *     summary: Create the new user
 *     description: Create a new user in database.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the user that is created.
 *       500:
 *         description: Server error. Failed to create the user.
 */
router.post('/CreateUser',User.createUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login with credentials password,id,role
 *     description: login with correct credentials and generate JWT
 *     responses:
 *       200:
 *         description: Successful operation. Returns JWT.
 *       500:
 *         description: Server error. Failed to return the JWT.
 */
router.post('/login',User.login);

/**
 * @swagger
 * /getusers:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the list of users.
 *       500:
 *         description: Server error. Failed to retrieve the list of users.
 */
router.get('/getUser',Admin.AdminAuth,User.getUser);

module.exports=router

