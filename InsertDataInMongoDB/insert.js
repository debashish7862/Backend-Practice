const dbConnect = require('./mongoDB')

const insert= async()=>{
    const db =await dbConnect();
    const result = await db.insert(
        [
        {name:'note5',brand:'vivo',price:500,category:"mobile"},
        {name:'note5',brand:'vivo',price:500,category:"mobile"},
        {name:'note5',brand:'vivo',price:500,category:"mobile"},
         {name:'note5',brand:'vivo',price:500,category:"mobile"}

]
    );

  if(result.acknowledged){
    console.log("data inserted")
  }
}

insert()