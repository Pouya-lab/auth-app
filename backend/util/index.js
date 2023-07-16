//this file is for those functions that we need to use in different part of the application

const jwt = require('jsonwebtoken')



exports.generateToken = (id) =>{
    return jwt.sign({ id } , process.env.JWT_SECRET , { expiresIn : '1d' })
}