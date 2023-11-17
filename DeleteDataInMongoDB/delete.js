const dbConnect =require('./mongoDB');

const deleteData=async()=>{

    let data = await dbConnect();

    // let result = await data.deleteOne({name:'m 20'})    //for single delete
    let result = await data.deleteMany({name:'m20'})      //for delete multiple
    if(result.acknowledgd){
        console.log('record deleted')
    }
}



deleteData();