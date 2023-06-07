 
const express=require('express')
const bodyparser=require('body-parser');

console.log('hi again')

const admin=require('./routes/admin.js');
const shop=require('./routes/shop.js');

const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.get('/add-product',(req,res,next)=>{
    res.send("<html><body><form action='/add-product' method='post'><input type='text' name='message' ><button type=submit>Send</button></form></body></html>");
});

app.post('/add-product',(req,res,next)=>{
    console.log(req.body);
   
    res.redirect('/');
   
});

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(8000);
