//require library
const mongoose=require('mongoose');

//establish the connection with DB
mongoose.connect('mongodb://localhost/contact_list');

//acquire the connection to check if it was successful
const db=mongoose.connection;

//error handling
db.on('error',console.error.bind(console,'Error connecting to db'));

//if connection successful then execute the following function
db.once('open', function(){
    console.log('Successfully Connected to DB');
})