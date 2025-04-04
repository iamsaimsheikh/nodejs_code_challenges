const express = require('express')
const app =  express()
const rateLimiter = require('./challenges/rateLimiterMiddleware')

app.use(rateLimiter)
app.use("/", (req, res) => {
    return res.status(200).send("working")
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})