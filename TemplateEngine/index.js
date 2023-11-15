const express = require('express');
const path = require ('path')




const app = express();
const publicPath =path.join(__dirname,'public')


app.set('view engine','ejs');              //-------------->

app.get('',(_,res)=>{
res.sendFile(`${publicPath}/index.html`)
})




app.get('/about',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
    })




    app.get('/profile',(_,res)=>{
        const user ={
            name:'anil sidhu',
            email:'anil@test.com',
            city:'noida'
        }
        res.render('profile',{user});
        })



    app.get('/help',(_,res)=>{
        res.sendFile(`${publicPath}/help.html`)
        })




        app.get('',(_,res)=>{
            res.sendFile(`${publicPath}/404.html`)
            })


            


app.listen(5000)