const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname , "../view", "signup.html"))
})

router.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname , "../view", "login.html"))
})

router.post("/signup", (req, res)=>{
    console.log(req.query)
})

module.exports = router