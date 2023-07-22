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

