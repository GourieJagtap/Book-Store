const Item= require("../model/item");

exports.getAllItems=async(req, res, next) => {
    let items;
    try {
        items= await Item.find();
    } catch (error) {
        console.log(error);
    }

    if (!items){
        return res.status(400).json({message:"No items found"});
    }
    return res.status(200).json({items})
}

exports.getItemById = async(req,res,next)=>{
    let id = req.params.id;
    let item;
    try {
        item=await Item.findById(id);
    } catch (error) {
        console.log(error);
    }

    if(!item){
        return res.status(404).json({message:"Item not found"});
    }
    return res.status(200).json({item});
}

exports.addItem=async(req, res, next) => {
    const {name,description,price,available,image}=req.body
    let item;
    try {
        item=new Item({
            name,
            description,
            price,
            available,
            image
        });
        await item.save();
    } catch (error) {
        console.log(error);
    }

    if(!item){
        return res.status(400).json({message:"cannot add"});
    }
    return res.status(200).json({item});
}

exports.updateItem=async(req,res,next)=>{
    const id= req.params.id;
    const {name,description,price,available,image}=req.body;
    let item;
    try {
        item= await Item.findByIdAndUpdate(id,
            {name,
            description,
            price,
            available,
            image
        });
        await item.save();
    } catch (error) {
        console.log(error);
    }

    if(!item){
        return res.status(404).json({message:"item not found to update"});
    }
    return res.status(200).json({message:"item updated",item})
}

exports.deleteById= async(req, res, next)=>{
    const id = req.params.id;
    let item;
    try {
        item= await Item.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    if(!item){
        return res.status(404).json({message:"item cannot be deleted"});
    }
    return res.status(200).json({message:"item deleted"});
}