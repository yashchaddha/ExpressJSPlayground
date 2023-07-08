const express=require('express');
const path=require('path');
//port
const port=8000

const db=require('./config/mongoose');
const Contact=require('./models/contacts');

const app=express();

//middleware
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

//middleware to render static files
app.use(express.static('assets'));

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
    Contact.create(req.body).then(newContact=>{
    console.log(newContact)
    res.redirect('/')}
    ).catch(err=>{
        console.log(err);
        return;
    });
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