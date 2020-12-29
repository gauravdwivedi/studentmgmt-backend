const User = require('../../../models/user');
const auth = require('../../../config/auth');
const jwt =require('jsonwebtoken');
const bcrypt = require("bcryptjs");


module.exports.register = async (req,res)=>{

    console.log(req.body)

try{
    let { email,password,passwordCheck,name,role}= req.body;

    //validating user

    if(!email || !password || !passwordCheck){
        return res.status(400).json({ msg:"Not all fields have been entered."});
    }

    if(password.length<5) 
        return res.status(400).json({ msg:"The password needs to be at least 5 characters long."});
    if(password!==passwordCheck){
        return res.status(400).json({ msg:"passwords does not match"});
    }

    const existUser = await User.findOne({email:email});
    if(existUser){
        return res.status(400).json({ msg:"Email already in use"});
    }

    const salt  = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password,salt);

    const newUser = new User({
        email,
        password:passwordHash,
        name,
        role
    })

    const savedUser = await newUser.save();
    res.json(savedUser);


}

catch(err){
    res.status(500).json({ error: err.message });
    }
}

module.exports.login=async (req,res)=>{
    try{

        const {email,password} = req.body;

        //validating email and password
        if(!email||!password){
            return res.status(400).json({ msg:"Please enter all fields!"});
        }

        const user =await User.findOne({email})
        if(!user){
            return res.status(400).json({ msg:"No Account associated with this email address!"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) { return res.status(400).json({msg:"Invalid credentails"}); }

        const token = jwt.sign({ id:user._id},'passcode');
        console.log("token",token)

        res.json({
            token,
            user:{
                id:user._id,
                name:user.name,
                role:user.role
            }
        })

    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports.tokenIsValid =async (req,res)=>{

    try{

        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token,'passcode');

        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);


        return res.json(true);



    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports.home= async (req,res)=>{

        try{
            console.log("Inside user Home",req.user)

            const user = await User.findById(req.user);
            console.log(user)
            res.json({
                name:user.name,
                id:user._id,
                role:user.role
            })


        }catch(err){
            res.status(500).json({
            error:err.message
        })       
        }
}