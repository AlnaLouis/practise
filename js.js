//server creation
/*
var http = require("http");
var server = http.createServer(function(req,res){
    res.write("welcome to the server");
    res.end();
});
server.listen(3333);
*/

// plane request

var http = require("http");
var server = http.createServer(function(req,res){
   if(req.url ==="/"){//request.url is header{
       res.write("Welcome page");
   }
    else if(req.url==="/login"){
           res.write("This is the login page");
           res.end();
    }
    else{
         res.write("Page doesn't exist");
         res.end();
    }
});
server.listen(2000);
console.log("the srver is ready at port :2000");