
const express=require('express')
const bodyparser=require('body-parser');

console.log('hi again')

const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.get('/add-product',(req,res,next)=>{
    res.send("<html><body><form action='/add-product' method='post'><input type='text' name='Product_Name' ><input type='number' name='Product_count' ><button type=submit>Send</button></form></body></html>");
});

app.post('/add-product',(req,res,next)=>{
    console.log(req.body);
   
    res.redirect('/');
   
});

app.use('/',(req,res,next)=>{
    res.send('<h1>product added<h1>');
})

app.listen(8000);
