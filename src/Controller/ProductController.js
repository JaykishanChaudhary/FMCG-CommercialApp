const ProductModal=require('../Models/ProductModal');

exports.CreateProduct=(async(req,res)=>{
    try{
        const NewProduct=new ProductModal(req.body);
        const productnew=await NewProduct.save();
        res.status(200).json({
            status:'success',
            result:productnew
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'fail',
            result:err
        })
    }

})

exports.GetProduct=(async(req,res)=>{
    try{
        const products=await ProductModal.find({}); 
        res.status(200).json({
            status:'success',
            result:products
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'fail',
            result:err
        })
    }

})


exports.GetProductByCategory=(async(req,res)=>{
    try{
        const { page, itemsPerPage, ...QueryParameters } = req.query;
        console.log(page,itemsPerPage)
        const filter={};
        for(const param in QueryParameters){
            if (param !== 'page') {
                // Convert price and quantity to numbers, if provided
                if (param === 'price' || param === 'quantity') {
                  filter[param] = parseFloat(QueryParameters[param]);}
                 else if(param=='name'||param=='category'||param=='brand'){
                    filter[param]=QueryParameters[param];
                 }
        }
    }
        console.log(filter);
        const pageNumber = parseInt(page) || 1;
        const itemsPerPageValue = parseInt(itemsPerPage) || 10;
        const skip = (pageNumber - 1) * itemsPerPageValue;
        const limit = itemsPerPageValue;
        const products=await ProductModal.find(filter).skip(skip)
        .limit(limit);
        console.log(products);
        if(products.length>0){
            res.status(200).json({
                status:'success',
                result:products
            })
        }else{
            res.status(404).json({
                status:'failed',
                result:'no such product'
            })
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'fail',
            result:err
        })
    }

})

exports.UpdateProduct=(async(req,res)=>{
    try{
        const _id=req.params;
        console.log(_id);
        console.log(req.body);
        const FindProduct=await ProductModal.findOne({_id});
        if(FindProduct){
            const UpdatedProduct=await ProductModal.updateOne(req.body);
            res.status(200).json({
                status:'success',
                result:UpdatedProduct
            })
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'fail',
            result:err
        })
    }

})


exports.DeleteProduct=(async(req,res)=>{
    try{
        const _id=req.params;
        console.log(_id);
        // console.log(req.body);
        const FindProduct=await ProductModal.findOne({_id});
        if(FindProduct){
            await ProductModal.deleteOne({_id});
            res.status(200).json({
                status:'success',
                result:FindProduct
            })
        }else{
            res.status(404).json({
                status:'failure',
                result:'Product with this id does not exist'
            })
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            status:'fail',
            result:err
        })
    }

})

