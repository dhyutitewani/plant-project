const mongoose = require('mongoose')

function connectDB(dbURI){
    mongoose
    .connect(dbURI)
    .then(()=>{
        console.log("mongo connected");
    })
    .catch((error)=>{
        console.log(error);
    })
}


module.exports = {connectDB}