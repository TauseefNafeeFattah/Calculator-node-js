const express = require("express");
const bodyParser = require("body-parser");
// to parse the post request and convert it into text/json/urlencoded (for forms)

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// to handle a get request
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

// to handle a post request

app.post("/",function(req,res){

});
app.listen(3000,function(){
  console.log("I am listening to you :) :)");
});
