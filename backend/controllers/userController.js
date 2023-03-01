const User = require('../models/User')
const bcrypt = require('bcryptjs');
const generateToken = require('../config/jwt');

const IsLogeedin = async (req, res) => {
    if (req.user) {
        res.status(200).json(req.user._id)
    } else {
        res.status(403).json('Not logeed in')
    }
}


const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email })

        if (!user) return res.status(404).json('User Not Exist')

        const isPassowrdCorrect = await bcrypt.compare(password, user.password)

        if (!isPassowrdCorrect) return res.status(403).json("Wrong Credentials")

        res.status(200).json({
            token: generateToken(user)
        })

    } catch (error) {
        return res.status(500).json(error);
    }

}


const register = async (req, res) => {

    const { password, email } = req.body

    try {

        const salt = await bcrypt.genSalt(10)
        const newPass = await bcrypt.hash(password, salt)

        const newUser = await User.create({ password: newPass, email })

        res.status(200).json({
            token: generateToken(newUser)
        })

    } catch (error) {
        return res.status(500).json(error);
    }

}




module.exports = { login, register, IsLogeedin }