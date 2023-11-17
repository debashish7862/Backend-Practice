const dbConnect = require('./mongoDB');




const updateData = async () => {


    let data = await dbConnect();
    let result = await data.updateOne(      //for update all use only update
        { name: 'max pro 5' }, { $set: { name: 'm 20',price:510 } }
    )



    console.warn(result)



}

updateData()