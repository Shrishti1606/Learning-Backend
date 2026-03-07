const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcryt = require('bcryptjs');


const registerUser = async (req, res) => {

    const { username, email, password, role = "user" } = req.body;

    const isUserAlreadyPresent = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(isUserAlreadyPresent) {
        return res.status(409).json({
            message: "username or email already exists"
        })
    }

    const hash = await bcryt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "user register successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

const loginUser = async (req, res) => {

    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if(!user){
        return res.status(404).json({
            message: "user not found"
        })
    }

    const isPasswordMatch = await bcryt.compare(password, user.password);

    if(!isPasswordMatch){
        return res.status(401).json({
            message: "invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)  

    res.cookie("token", token)

    res.status(200).json({
        message: "user logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })

}

const logoutUser = async (req, res) => {
    res.clearCookie("token");

    res.status(200).json({
        message: "user logged out successfully"
    })
}

module.exports = { registerUser, loginUser, logoutUser }
