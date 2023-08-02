const express = require('express')
const router = express.Router()

const userController = require('../controller/user')
const authMiddleware = require('../middleware/authMiddleware')


router.post("/register" , userController.registerUser)

router.post("/login" , userController.loginUser)

router.get("/logout" , userController.logoutUser)
//add protect middleware for users to getUser
router.get("/getUser" , authMiddleware.protect , userController.getUser)

router.patch("/updateUser" , authMiddleware.protect , userController.updateUser)
//the id is send as params
router.delete("/:id" , authMiddleware.protect , authMiddleware.adminOnly ,  userController.deleteUser)

router.get("/getUsers" , authMiddleware.protect  , authMiddleware.authorOnly ,  userController.getUsers)

router.get("/loginStatus" , userController.loginStatus)

router.post("/upgradeUser" , authMiddleware.protect  , authMiddleware.adminOnly ,  userController.upgradeUser)

router.post("/sendAutomatedEmail" , authMiddleware.protect  , userController.sendAutomatedEmail)

router.post("/sendVerificationEmail" , authMiddleware.protect  , userController.sendVerificationEmail)

router.patch("/verifyUser/:verificationToken" ,  userController.verifyUser)




module.exports = router