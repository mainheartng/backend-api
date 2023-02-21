import express from "express";
import cors from "cors";
// import "./src/models/index.js";
import logger from "morgan";
import helmet from "helmet";
import authMiddleware from "./src/middlewares/authMiddleware";

const port = 3000;

const app = express();

app.use(cors());

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("X-Powered-By", "Mainheart and co.")
  if(req.method === 'OPTIONS'){
    res.header("Access-Control-Allow-Methods","POST, PUT, GET, DELETE, PATCH");
    return res.status(200).json({});
  }
  next()
})

app.use(logger("dev"))

app.use(express.json())

app.use(express.urlencoded())

app.use(helmet())


app.get("/", authMiddleware, function (req, res) {
  res.json({
    status: 200,
    message: "Welcome to Main Heart Api",
  });
});

app.listen(port, function () {
  return console.log("Running on 3000");
});
