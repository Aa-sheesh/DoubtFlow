import User from "../models/user.model.js";

export const login = async(req , res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        // console.log(user);
        if(user &&(await user.comparePassword(password))){
            res.status(200).json({
                id:user._id,
                name:user.name,
                email:user.email,
                branch:user.branch,
                section:user.section,
            })
        }
        
    } catch (error) {
        console.log("Error in login",error);
        res.status(500).json({
            message:"Internal Server Error",
        })
    }
}