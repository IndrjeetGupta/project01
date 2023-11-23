
const express = require("express")

const app = express()

app.get("/" ,(req,  res) =>{
    res.send({massage : "API is working"})
})

app.get("/testing" ,(req,  res) =>{
    res.send({massage : "Tesing is working"})
})



app.listen(8000, () =>{
    console.log("listing port 8000")
})