const Student = require('../../../models/student');
const jwt =require('jsonwebtoken');

module.exports.register = async (req,res)=>{
    console.log(req.body)
try{
    const student = await Student.create(req.body);

    return res.status(200).json({
        success:true,
        message:student
    });
}

catch(err){
    return res.status(500).json({
                succes:false,
                message:err.message
        })
    }
}