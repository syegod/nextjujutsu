import main from "@/db/main"
import { User } from "@/db/models"
import * as bcrypt from 'bcryptjs'
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"
import { verify } from "jsonwebtoken"

export default async function getMe(req, res) {
    const { UserJWT } = req.cookies;
    if (UserJWT) {
        try {
            const decoded = verify(UserJWT, process.env.NEXT_PUBLIC_JWT_SECRET);
            const user = await User.findOne({_id: decoded._id});
            if (!user) return res.status(404).json({ message: 'User not found.' });
            const { passwordHash, ...userData } = user._doc;
            const token = sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 4,
                    _id: user._id,
                    username: user.username,
                    type: user.type
                },
                process.env.NEXT_PUBLIC_JWT_SECRET
            )
            const serialized = serialize("UserJWT", token, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 4,
                path: "/",
            })
            res.setHeader('Set-Cookie', serialized)
            return res.status(200).json(userData);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    } else {
        return res.status(401).json({ message: 'User not authorized.' });
    }
}