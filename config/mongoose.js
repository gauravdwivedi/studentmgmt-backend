const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/collegemgmt',{useNewUrlParser:true});
const db = mongoose.connection

db.on('error',console.error.bind(console,"Error connecting to db"));

db.once('open',function(){
    console.log("SUccessfully connected to db");
});