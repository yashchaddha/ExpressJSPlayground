const express=require('express');
const path=require('path');
//port
const port=8000

const app=express();

//middleware
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

//middleware to render static files
app.use(express.static('assets'));

// //middleware1
// app.use(function(req,res,next){
//     req.myName="Yash";
//     console.log("Middleware1 called");
//     next(); // Next calls the next Middleware
// })

// //middleware2
// app.use(function(req,res,next){
//     console.log("Fetching the value from the previous middleware:",req.myName);
//     console.log("Middleware2 called");
//     next();
// })

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


//routes

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

app.post('/create-contact',function(req,res){
    contactList.push(req.body);
    return res.redirect('/');
});

app.get('/delete-contact/:phone',function(req,res){
    let contactToBeDeleted=req.params.phone;
    let contactIndex=contactList.findIndex((contact)=>contact.phone==contactToBeDeleted);
    contactList.splice(contactIndex,1);
    return res.redirect('back');
});

app.listen(port,function(err,data){
    if(err){
        console.log('Oops Error',err);
    }
    console.log('Express JS app running successfully on port:',port);

})