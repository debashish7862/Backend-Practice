const app = require ('./app')


console.log(app.z())

const arr =[2,4,7,8,9]

let result =arr.filter((item)=>{
    return item >= 3
})
console.warn(result)