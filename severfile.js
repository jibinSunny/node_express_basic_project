
var express = require("express");
var app = express();
var fs = require("fs");
var bodyparser = require("body-parser");
var mysql = require("mysql");
app.listen(8000);
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pass@123",
    database:'nodeDB'
})

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log('connect');

})



app.use(function(req,res,next){
    next();
});
app.use(bodyparser.urlencoded({extended:false}))

app.get("/index.html",function(req,res){
    fs.readFile('.'+req.url,function(error,data){
        res.write(data);
        res.end();

    });
})

app.post("/student",function(req,res){
        res.send(req.body);
})

app.get("/student",function(req,res){
    res.send(req.query);
})

app.get("/profile/:id",function(req,res){
    res.send(req.params.id);
})