import connectDB from "@/utils/connectDB";
import User from "@/libs/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    try{
        if(req.method !== "POST"){
            return res.status(404).json({error: "Method Not Allowed!"});
        }
        await connectDB();
        console.log("Data ", req.body);
        const {firstname, lastname, email, password} = req.body;
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstname, 
            lastname,
            email,
            password: hashed,
            isCreated: true
        });
        if(user){
            console.log("SUCCESS");
            return res.status(201).json({message: "User created successfully.."});
        }
    }
    catch(err){
        console.error(err);
        return res.status(401).json({error: "Bad Request.., " + err.message});
    }
}