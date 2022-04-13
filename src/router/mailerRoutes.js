const express = require('express');
const mailRouter = express.Router();

function routers(nav){
    mailRouter.get('/',function(req,res){
        res.render("mailer",{
            nav,
            title:'Mailer'
    
        });
    });



    return mailRouter;
}
module.exports =routers;