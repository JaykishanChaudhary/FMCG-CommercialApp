const express=require('express');
const router=express.Router();
const Product=require('../Controller/ProductController')


router.post('/CreateProduct',Product.CreateProduct);
router.get('/getProducts',Product.GetProduct);
router.put('/UpdateProduct/:_id',Product.UpdateProduct);
router.delete('/DeleteProduct/:_id',Product.DeleteProduct);


module.exports=router;