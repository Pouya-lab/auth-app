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

 //checking for login user validation with backend data
 //how we login a user?? => by sending cookies to clients(browser)
exports.loginUser = asyncHandler( async (req , res)=>{
    const { email , password } = req.body

    //validation
    if( !email || !password ){
        res.status(400)
        throw new Error("Please add email or password!!")
    }

    //if user exists
    const user = await User.findOne({ email })

    //if user does not exists
    if(!user){
        res.status(404)
        throw new Error("user not found!! Please sign up")
    }

    //comparing the given password with the hashed password in database
    const passwordIsCorrect = await bcrypt.compare(password , user.password)
    if(!passwordIsCorrect){
        res.status(400)
        throw new Error("Password is not correct")
    }

    //trigger 2factor authentication for user device that is using to connect

    //now that everything is alright we have to login the user

    //generate Token for the action
    const token = generateToken(user._id)
    if (user && passwordIsCorrect) {

        res.cookie("token" , token , {
            path : '/',
            httpOnly : true ,
            expires : new Date(Date.now() + 1000 * 86400),
            sameSite : "none",
            secure : false
            //TODO change secure to true for deployment
        })
        //sending datas from DB to front
        const { _id , name , email , phone , bio , photo , role , isVerified } = user
            res.status(200).json({
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
    else{
        res.status(500)
        throw new Error("Something went wrong!! Please try again")
    }

} )

//logout user
exports.logoutUser = asyncHandler( async (req , res)=>{
    //expire cookie to logout user and for token value we send empty string 
    res.cookie("token" , "" , {
        path : '/',
        httpOnly : true ,
        expires : new Date(0), //this time is going to expire the user and kick them out
        sameSite : "none",
        secure : true
    })
    return res.status(200).json({ mssg : "Logout successful" })
})

//for getting each user loged in in our app
exports.getUser = asyncHandler(async (req , res)=>{
    res.send("get useer")
})