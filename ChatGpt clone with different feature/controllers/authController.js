const errorhandler = require('../middleware/errorMidleware');
const userModel = require('../models/userModel');
const errorResposnse = require('../utils/errorResponse');


// JWT token 
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignToken(res)
    res.status(statusCode).json({
        success: true,
        token,
    })
}

// register the new user 
exports.registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        //existing user
        const existingEmail = await userModel.findOne({ email })
        if (existingEmail) {
            return next(new errorResposnse('Email already registered', 500))
        }

        const user = await userModel.create({
            username,
            email,
            password
        })
        this.sendToken(user, 201, res)

    } catch (err) {
        console.log(err);
        next(err);
    }
}


exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body
        // validation 
        if (!email || !password) {
            return next(new errorResposnse('please provide email and password',))
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return next(new errorResposnse('Invalid credentials', 401))
        }
        const isMatch = await user.matchPassword(password)
        if (!isMatch) {
            return next(new errorResposnse('invalid username or password', 401))
        }
        this.sendToken(user, 200, res)
    } catch (err) {
        console.log(err);
        next(err);
    }
}


// Logout 
exports.logoutController = async (req, res, next) => {
    res.clearCookie('refreshToken')
    res.status(200).json({
        success: true,
        message: 'Successfully logged out'
    })
}