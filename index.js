const express = require('express');


//port number
const port =5000;


const db = require('./config/mongoose');

const app = express();

app.use(express.json());

app.use('/', require('./routes'));

app.listen(port,(err)=>{
    if(err){ console.log('error'); return;}
    
    console.log(`server is running on ${port}`);
})