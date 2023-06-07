const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send("<html><body><form action='/admin/add-product' method='post'><input type='text' name='Product_Name' ><input type='number' name='Product_count' ><button type=submit>Send</button></form></body></html>");
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
   
    res.redirect('/admin/add-product');
   
});
module.exports=router;