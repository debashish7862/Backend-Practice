const express = require('express');
const app = express();
app.get('',(req,res)=>{
    res.send(`<h1>Welome , to Home Page</h1>
    <a href="/about"/>Go to About</a> `);

});
app.get('/about',(req,res)=>{

    res.send(`
        <input type ='text' placeholder='User name' value="${req.query.name}"/>
        <button>Click Me</button>
        <a href="/"/>Go to home</a> `
    );

});
app.get('/help',(req,res)=>{
    res.send(
        
        {
        name:'anil',
        email:'anil@123.com'
    }
    
    
    );

});

app.listen(4001)