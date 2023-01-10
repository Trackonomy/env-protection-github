const express = require("express");
const app = express()

const env = process.env.ENVIRONMENT
const PORT = parseInt(process.env.PORT || 8080)
app.get("/ping", (req, res) => {
    res.send(`Testing_slot_change_branch_v4: ENV Variable =  ${process.env.TEST || "Undefined"}`)
})


app.listen(PORT, () => {
    console.log("APP is listening on Port: ", PORT)
});