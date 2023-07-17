const express = require('express')
const router = express.Router()

const userController = require('../controller/user')


router.post("/register" , userController.registerUser)

router.get("/login" , userController.loginUser)


module.exports = router