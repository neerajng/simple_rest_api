const express = require('express')
const app = express()

app.get('/url', (req, res, next) => {
    res.json(["NodeJS", "React", "ExpressJS", "MongoDB"])
})

app.listen(3000, ()=>{
    console.log("Server is running on PORT 3000")
})