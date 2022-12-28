const express = require("express");
const app = express()
const port = process.env.PORT || 4000;
const env = process.env.ENVIRONMENT
app.get("/ping", (req, res) => {
    console.log(process.env)
    res.send("test2")
})


app.listen(port, () => {
    console.log("APP is listening on Port: ", port)
})