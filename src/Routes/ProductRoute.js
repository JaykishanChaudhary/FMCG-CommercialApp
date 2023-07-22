const express=require('express');
const router=express.Router();
const Product=require('../Controller/ProductController')
const jwtAuth=require('../MiddleWare/AuthMiddleware');


router.post('/CreateProduct',jwtAuth,Product.CreateProduct);
router.get('/getProducts',jwtAuth,Product.GetProduct);
router.put('/UpdateProduct/:_id',jwtAuth,Product.UpdateProduct);
router.delete('/DeleteProduct/:_id',jwtAuth,Product.DeleteProduct);


module.exports=router;