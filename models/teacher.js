const mongoose = require('mongoose');

const { Schema} = mongoose;



const teacherSchema = new Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:Schema.Types.ObjectId,
        unique:true,
        ref:'Subject'
    }
},{
    timestamps:true
})

const Teacher = mongoose.model('Teacher',teacherSchema);
module.exports =Teacher;