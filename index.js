const express = require("express");
const app = express()

const env = process.env.ENVIRONMENT
app.get("/ping", (req, res) => {
    res.send("test")
})


app.listen(3001, () => {
    console.log("APP is listening on Port: ", 3001)
})