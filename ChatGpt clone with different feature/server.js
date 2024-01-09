const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const colors = require("colors")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const errorhandler = require("./middleware/errorMidleware")
// route path 
const authRoutes = require('./routes/authRoutes')
const openaiRoutes = require('./routes/openaiRoutes')

// config .env {this is relating to secuirity of our application}

dotenv.config()


//db connection

connectDB()

// create rest object 

const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(errorhandler)



const PORT = process.env.PORT

// APi Routes 
app.use('/api/v1/auth', authRoutes)
app.use('/api', openaiRoutes) 

//api's




// listen server 

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} on port ${PORT}`.bgBlue.white);
})