const express=require('express');
const path=require('path');
//port
const port=8000

//middleware
const app=express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

//Contact List
var contactList=[
    {
        name:'Yash Chaddha',
        phone:'9170985557'
    },
    {
        name:'Harsh Chaddha',
        phone:'8840633587'
    },
    {
        name:'Kinetic Codes',
        phone:'7007910494'
    }
];

app.get('/',function(req,res){
    return res.render('home',{
        title:'My contact list',
        heading: 'Below is Yash'+"'s"+' Contact List',
        contact_list:contactList
    });
})

app.get('/practise',function(req,res){
    return res.render('practise',{
        title:'Playground',
        name:'Yash Chaddha'
    })
})

app.listen(port,function(err,data){
    if(err){
        console.log('Oops Error',err);
    }
    console.log('Express JS app running successfully on port:',port);

})