const express=require('express');

//port
const port=8000

//middleware
const app=express();

app.get('/',function(request,response){
    response.send('<h1>Wooow Yash!! You have built your First Express JS App! Congratulations!!!!!!</h1>');
})

app.listen(port,function(err,data){
    if(err){
        console.log('Oops Error',err);
    }
    console.log('Express JS app running successfully on port:',port);

})