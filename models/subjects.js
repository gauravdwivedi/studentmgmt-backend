const mongoose = require('mongoose');
const { Schema} = mongoose;


const subjectSchema =new Schema({

    subjectname:{
        type:String,
        required:true,
        unique:true
     },

    // teacher:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Teacher'
    // },

    // student:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Student'
    // },
    
},{
    timestamps:true
})


const Subject = mongoose.model('Subject',subjectSchema);

module.exports=Subject;



