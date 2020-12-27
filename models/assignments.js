const mongoose = require('mongoose');
const {Schema} = mongoose;

const assignmentSchema = new Schema({

    subject:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },

    description:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})


const Assignment = mongoose.model('Assignment',assignmentSchema);
module.exports =Assignment;