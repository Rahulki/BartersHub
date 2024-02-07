import Mongoose from "mongoose";


const UserSchema = new Mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },
        email: {
            type: String,
            required: true,
            max: 20,
            min: 2
        },
        password: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        areaCode: {
            type: Number,
            required: true
        }
    }, { timestamps: true }
)


const User = Mongoose.model("User", UserSchema);
export default User;
