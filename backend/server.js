require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookiePaser = require('cookie-parser');
const userRoute = require('./routes/user')

const app = express()

//helps to send info from back to front and vice versa
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookiePaser())
app.use(bodyParser.json())
app.use(cors({
    origin : ["http://localhost:3000" , "https://auth-app.vercel.app" ],
    credentials : true
}))

app.use("/api/users" , userRoute)

app.get("/" , (req , res , next)=>{
    res.send("Home page")
})

const PORT = process.env.PORT || 5000 

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`Server runs on ${PORT}`)
    })
})
.catch((err) =>{
    console.log(err)
})

