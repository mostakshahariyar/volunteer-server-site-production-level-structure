import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
        {
                FullName: {
                        type: String,
                        required: true,
                        index: true
                },
                email: {
                        type: String,
                        required: true,
                        lowercase: true,
                        unique: true,
                        index: true
                },
                avatar: {
                        type: String, // cloudinay
                        required: true,
                },
                password: {
                        type: String,
                        required: true,
                }
        }
        ,
        { timestamps: true });
//  password encryption
userSchema.pre("save", async function (next) {
        if (!this.password.isModified("password")) return next()

        this.password = await bcrypt.hash(this.password, 10)
        next()

})
// password compare when we login with email and password
const passwordIsCorrect = userSchema.methods.isPasswordCorrect = async function (password) {
        return await bcrypt.compare(password, this.password)
}


export const User = mongoose.model("User", userSchema);