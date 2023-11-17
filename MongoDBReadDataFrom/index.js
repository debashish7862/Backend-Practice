const dbConnect = require('./mongoDB')

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data)

//     })

// })


const main = async ()=>{
    let data = await dbConnect() ;                // ------>modern code
    data = await data.find().toArray();
    console.warn(data)

}


main()