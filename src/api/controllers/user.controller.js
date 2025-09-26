import {User} from "../models/user.model"
import {ApiError} from ".../src/utils/api-error.js"


const registerUser = async (req, res, next) =>{
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password) {
            throw new ApiError(400,"All fields are required");
        }
        const foundUser = await User.findOne({ email});
        if(foundUser) {
            throw new ApiError(400, "Email already exists")
        }
        // const newUser = {name, email, password};
        const savedUser = await User.create({ name,email, password })
        // User.save({name, email, password})

        // Remove password before sending the response
savedUser.password = undefined;

// Send the final success response
return res.status(201).json(
    new ApiResponse(201, savedUser, "User registered successfully")
);
    }
    catch(error){
        console.log(error);
        next(error);
    }
}


export default {
    registerUser
}