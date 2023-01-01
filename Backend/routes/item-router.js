const express= require('express');
const {getAllItems,addItem, getItemById, updateItem,deleteById} = require('../controllers/item-controller')
const router= express.Router();

router.get("/",getAllItems).post("/",addItem).get("/:id",getItemById).put("/:id",updateItem).delete("/:id",deleteById);

module.exports=router;