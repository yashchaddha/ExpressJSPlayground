const express=require('express');
const path=require('path');
//port
const port=8000

//middleware
const app=express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home',{title:'My contact list',
                              heading: 'Yash is using EJS'});
})

app.listen(port,function(err,data){
    if(err){
        console.log('Oops Error',err);
    }
    console.log('Express JS app running successfully on port:',port);

})