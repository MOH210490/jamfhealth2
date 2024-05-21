import connectDB  from "@/utils/connectDB";
import User from "@/libs/models/User";
export default async function handler(req, res){
    res.setHeader("Content-Type", "application/json");
    try{
        await connectDB();
        const {email} = req.body;
        const user_signedIn = await User.findOne({email}).select("_id");
        res.status(201).json({user_signedIn});
    }
    catch(err){
        console.error(err);
    }
}