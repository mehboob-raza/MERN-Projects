const mongoose = require('mongoose')

const colors = require('colors')

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to mongoDb database ${mongoose.connection.host}`.bgGreen.white );
    }catch(err){
        console.log(`MongoDB connection Error ${err}`.bgRed.white);
    }
}

module.exports = connectDB