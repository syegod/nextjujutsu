import { Schema, model, Types } from "mongoose"

const UserSchema = new Schema({
    username: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
    passwordHash: { type: String, require: true },
});
let User
try {
    User = model('User')
} catch (error) {
    User = model('User', UserSchema)
}
export { User }