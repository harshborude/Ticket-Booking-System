import mongoose from "mongoose";
import {UserRolesEnum} from ".../src/utils/constants.js"


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type : String,
        required : true,
        trim : true
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    password : {
        type: String,
        required : [true, "Password is required"],
    },
    role : {
        type : String,
        enum : Object.values(UserRolesEnum),
        default : UserRolesEnum.USER,
    }
}, {
    timestamps : true
}
)

export const User = mongoose.model("User", userSchema);