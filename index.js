import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";

const port = 3000

const app = express()

app.get("/", function(req, res){
console.log("Running")
})

app.listen(port, function(){return
console.log("Running on 3000")})