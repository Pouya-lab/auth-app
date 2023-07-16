const asyncHandler = require('express-async-handler')
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../util')
var parser = require('ua-parser-js')

exports.registerUser = asyncHandler( 
    async (req , res ) =>{
        const { name , email , password } = req.body

        //validation
        if (!name || !email || !password) {
            res.status(400)
            throw new Error('Please fill all the required fields ')
        }

        if (password.length < 6) {
            res.status(400)
            throw new Error('Password should be more than six Characters')
        }

        //if user exists
        const userExists = await User.findOne({email})
        if (userExists) {
            res.status(400)
            throw new Error('Email has already been registered')
        }

        //get user agent
        const ua = parser(req.headers['user-agent'])
        const userAgent = [ua.ua]

        //create new user
        const user = await User.create({
            name , 
            email ,
            password,
            userAgent
        })

        //generate token
        const token = generateToken(user._id)

        //send http only cookie
        res.cookie("token" , token , {
            path : '/',
            httpOnly : true ,
            expires : new Date(Date.now() + 1000 * 86400) ,//expires after a day
            sameSite : 'none', //for checking if the front and back are in the same site
            secure : true, //for deploy should be true but during development can be false
        })


        if (user) {
            const { _id , name , email , phone , bio , photo , role , isVerified } = user


            res.status(201).json({
                _id ,
                name , 
                email , 
                phone , 
                bio , 
                photo , 
                role , 
                isVerified , 
                token
            })

        }
        else
        {
            res.status(400)
            throw new Error('Invalid user data!! ')
        }

    }
 ) 


// module.exports = {
//     registerUser
// } 