const mongoose = require('mongoose');
const { Schema } = mongoose;

const requiredString ={
    type:String,
    required:true
}

const studentSchema = new Schema({

    username:requiredString,
    email:{
        type:String,
        unique:true
    },
    password:requiredString,

    subject:{
        type:Schema.Types.ObjectId,
        unique:true,
        ref:'Subject'
    }

},{
    timestamps:true
})

const Student = mongoose.model('Student',studentSchema);

module.exports =Student;