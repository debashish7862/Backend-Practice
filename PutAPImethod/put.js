const express = require('express')
const dbConnect = require('./mongoDB')





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


app.put("/",async (req,resp)=>{

    let data = await dbConnect();
     let result =data.updateOne(
        {name:req.body.name},{$set:req.body}
        )
    resp.send({result:"update"})

})



app.listen(5000)