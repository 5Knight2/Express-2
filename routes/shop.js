const express=require('express');
const router=express.Router();

router.get('/home',(req,res,next)=>{
    res.send('<h1>hiiii<h1>');
})

module.exports=router;