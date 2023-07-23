const express=require('express');
const router=express.Router();
const Product=require('../Controller/ProductController')
const jwtAuth=require('../MiddleWare/AuthMiddleware');

/**
 * @swagger
 * /CreateProduct:
 *   post:
 *     summary: Create the new product. 
 *     description: create new product and save that product in the database.
 *     responses:
 *       200:
 *         description: Successful operation. create the new product and save that product in database.
 *       500:
 *         description: Server error. Failed to create the new product .
 */
router.post('/CreateProduct',jwtAuth,Product.CreateProduct);

/**
 * @swagger
 * /getProducts:
 *   get:
 *     summary: Get a list of Products
 *     description: Retrieve a list of Products from the database.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the list of products.
 *       500:
 *         description: Server error. Failed to retrieve the list of products.
 */
router.get('/getProducts',jwtAuth,Product.GetProduct);

/**
 * @swagger
 * /ProductsByCategory:
 *   get:
 *     summary: Get a list of products with filter.
 *     description: Retrieve a list of products with filteration from the database.
 *     responses:
 *       200:
 *         description: Successful operation. Returns the list of products with filteration.
 *       500:
 *         description: Server error. Failed to retrieve the list of filteration.
 */
router.get('/ProductsByCategory',jwtAuth,Product.GetProductByCategory);

/**
 * @swagger
 * /UpadteProduct/:_id:
 *   put:
 *     summary: updates the particular products with the help of _id.
 *     description: upadtes the product with the help of filteration.
 *     responses:
 *       200:
 *         description: Successful operation. Returns updated product.
 *       500:
 *         description: Server error. Failed to retrieve the updated product.
 */
router.put('/UpdateProduct/:_id',jwtAuth,Product.UpdateProduct);

/**
 * @swagger
 * /DeleteProduct/:_id:
 *   delete:
 *     summary: delete any product with the help of filteration from database.
 *     description: delete a product from the database.
 *     responses:
 *       200:
 *         description: Successful operation. Returns deleted product from database.
 *       500:
 *         description: Server error. Failed to delete  a product from database. 
 */
router.delete('/DeleteProduct/:_id',jwtAuth,Product.DeleteProduct);


module.exports=router;