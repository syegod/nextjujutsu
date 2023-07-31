import main from "@/db/main"
import { User } from "@/db/models"
import * as bcrypt from 'bcryptjs'
import { sign } from "jsonwebtoken"
import { serialize } from "cookie"


export default async function login(req, res) {
    try {
        const { UserJWT } = req.cookies
        if (UserJWT)
            return res.status(400).json({ message: 'Already logged in!' })
        const { usernameOrEmail, password } = req.body
        main()
        const candidateEmail = await User.findOne({ email: usernameOrEmail });
        const candidateUsername = await User.findOne({ username: usernameOrEmail });
        const candidate = candidateEmail || candidateUsername;
        if (!candidate) {
            return res.status(400).json({ message: 'Invalid credentials!' })
        }
        const passCompare = await bcrypt.compare(password, candidate.passwordHash)
        if (!passCompare) {
            return res.status(400).json({ message: 'Invalid password!' })
        }
        
        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 4,
                _id: candidate._id,
                username: candidate.username,
                type: candidate.type
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
        return res.status(200).json({ message: "Logged in!" })

    } catch (error) {
        return res.status(500).json({ message: error.message || 'Server error.' })
    }
}