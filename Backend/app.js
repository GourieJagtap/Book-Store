const express=require('express');
const mongoose=require('mongoose');
const router=require("../Backend/routes/item-router");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());
app.use('/items',router);


mongoose.connect("mongodb+srv://admin:AQ3u9XK12h41zkAE@cluster0.l40ayf5.mongodb.net/ItemStore?retryWrites=true&w=majority")
    .then(()=>{
    console.log("db connection established")})
    .then(()=>{
        app.listen(5000)
    })
    .catch((error)=>console.log(error));


//AQ3u9XK12h41zkAE