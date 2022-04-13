const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const nav = [
    {link:'/home',name:'Home'},
    {link:'/mailer',name:'Mailer'},
    
 ];

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

const homeRouter = require('./src/router/homeRoutes')(nav)
const mailRouter = require('./src/router/mailerRoutes')(nav)

app.use('/home',homeRouter);//we use app.use because what ever comes after /book/ it should route to books page
app.use('/mailer',mailRouter);

app.get('/',function(req,res){
  res.render("index",{
    nav,
    title:'Main'
  });
 });



app.listen(process.env.PORT || 7000);

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
/*
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
*/

