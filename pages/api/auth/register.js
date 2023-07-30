import main from "@/db/main"
import { sign } from "jsonwebtoken";
import { hashSync } from "bcryptjs";
import { User } from "@/db/models";

export default async function register(req, res){
    try {
        main();
        const {email, username, password} = req.body;
        const candidateEmail = await User.findOne({email});
        const candidateUname = await User.findOne({username});
        if(candidateEmail) return res.status(409).json({message: 'User with same email already exists.'});
        if(candidateUname) return res.status(409).json({message: 'User with same username already exists.'});
        const passwordHash = hashSync(password, 6);
        const user = new User({ username, email, passwordHash });
        await user.save();
        return res.status(201).json({ message: 'Registered!' });
    } catch (err) {
        return res.status(500).json({message: err.message || 'Server error.'});
    }
}