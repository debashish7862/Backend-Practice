module.exports=reqFilter=(req,res,next)=>{
    // console.log('reqFilter')
    if(!req.query.age)
    {
       res.send('please provide age')
    }
    else if(req.query.age<18)
    {
    res.send("You are not eligible for bang bang")
    }
    
    else
    
    {
        next();
    }
   
}