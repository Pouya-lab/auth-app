//this file works for that each user get to the specific route which is for them not others route
const asyncHandler = require('express-async-handler')
const User = require('../model/user')
const jwt = require('jsonwebtoken')

// how we login a user?? => by sending cookies to clients(browser)
exports.protect = asyncHandler( async (req , res , next)=>{
    
        try {
            const token = req.cookies.token
        console.log(token);
        if(!token){
            res.status(401)
            throw new Error("Not . Please Login")
        }
        
        // verify token
        const verified = jwt.verify( token , process.env.JWT_SECRET )
        // get user ID from token 
        const user = await User.findById(verified.id).select("-password")

        if(!user){
            res.status(401)
            throw new Error("User not found")
        }

        if(user.role === "suspended"){
            res.status(400)
            throw new Error("User suspended, please contact support")
        }

        req.user = user
        next()
        } catch (error) {
            res.status(401)
        throw new Error("Not authoruzed. Please ")
        }
    
})
