const Subject = require('../../../models/subjects');

module.exports.create = async (req,res)=>{

        try{

            const subject = await Subject.create(req.body);

            return res.status(200).json({
                success:true,
                message:subject
            })


        }catch(err){
            res.status(500).json({
                success:false
            })
        }
}
