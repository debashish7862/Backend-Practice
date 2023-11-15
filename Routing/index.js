const express = require('express');
const app = express();
app.get('',(req,res)=>{
    console.log("data send by browser",req.query.name)


    res.send('hello, this is home page' +"------->"+req.query.name)

});
app.get('/about',(req,res)=>{

    res.send('hello, this is about page')

});

app.listen(4000)