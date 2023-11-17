const express = require('express')
const dbConnect = require('./mongoDB')
const mongoDb=require('mongodb')





const app = express();
app.use(express.json())


app.get('/', async (req, resp) => {

    let data = await dbConnect();
    data = await data.find().toArray();     //for grt data




    resp.send(data)

})
app.post('/', async (req, resp) => {

    //for post data from api to vs cide


    let data = await dbConnect();
    let result= await data.insertOne(req.body);


    resp.send(result)

})


// app.put("/",async (req,resp)=>{

//     let data = await dbConnect();
//      let result =data.updateOne(
//         {name:req.body.name},{$set:req.body}
//         )
//     resp.send({result:"update"})

// })


app.delete("/:id",async (req,resp)=>{

    console.log(req.params.id)
    const data =await dbConnect ();
    const result = await data.deleteOne({id:new mongodb.ObjectId(req.params.id)})

    resp.send(result)

})



app.listen(5000)