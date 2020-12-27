const Teacher = require('../../../models/teacher');
const jwt = require('jsonwebtoken');


module.exports.register = async (req,res)=>{

    console.log(req.body);

    try{

        const teacher = await Teacher.create(req.body);

        return res.status(200).json({
            success:true,
            message:teacher
        })
    }catch(err){
        
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}