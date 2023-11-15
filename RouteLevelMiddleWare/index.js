const express = require('express');
const reqFilter =require('./Middleware')
const app = express();
const route= express.Router();


route.use(reqFilter)
// app.use(reqFilter)


app.get('/',(req,res)=>{
 res.send('welcome to home page')
})
// app.get('/users',reqFilter,(req,res)=>{
//     res.send('welcome to Users page')        -----app.get if middleware not app;ly
//    })


route.get('/users',(req,res)=>{
    res.send('welcome to Users page')
   })
   
   route.get('/about',(req,res)=>{
    res.send('welcome to Users page')     //--------------->route.get if want to add middle ware
   })

   app.get('/contact',(req,res)=>{
    res.send('welcome to Users page')
   })

app._router.use('/',route)

app.listen(5000)