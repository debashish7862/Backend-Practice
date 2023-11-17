const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm")

const productSchema = new mongoose.Schema({

    name: String,
    price: Number,
    brand: String,
    category: String
});



const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);   //------>create
    let data = new Product({
        name: "samsung 10",
        price: 200,
        brand: "apple",
        category: "mobile"
    })
    const result = await data.save();
    console.log(result)
}
// saveInDB()

const updateInDB=async()=>{
    const Product =mongoose.model('products', productSchema);           //------update
    let data = await Product.updateOne(
        {name:"xolomy"},
        {$set:{price:740}}
        )
   console.log(data)
}

// updateInDB();


const deleteInDB = async()=>{
    const Product =mongoose.model('products', productSchema);    //----------delete

    let data = await Product.deleteOne({name:'nokia 1100'});

    console.log(data)
}

// deleteInDB();


const findInDB = async()=>{
    const Product =mongoose.model('products', productSchema);    //----------delete

    // let data = await Product.find({name:"m 10"});    // ------for search specif model 


    let data = await Product.find();              // to find all 


    console.log(data)
}

// findInDB();
