 
const express=require('express')
const bodyparser=require('body-parser');

console.log('hi again')

const admin=require('./routes/admin.js');
const shop=require('./routes/shop.js');

const app=express();
app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',admin);
app.use('/shop',shop)
app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(8000);