const express = require('express')
const router = express.Router()

const userController = require('../controller/user')
const { protect } = require('../middleware/authMiddleware')


router.post("/register" , userController.registerUser)

router.post("/login" , userController.loginUser)

router.get("/logout" , userController.logoutUser)
//add protect middleware for users to getUser
router.get("/getUser" , protect , userController.getUser)

router.patch("/updateUser" , protect , userController.updateUser)


module.exports = router