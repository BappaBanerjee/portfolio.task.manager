const expressAsyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");

const userLogin = expressAsyncHandler(async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        res.status(400);
        throw new Error("username and password is required");
    }

    const user = await User.findOne({ name });
    if (user && user.password === password) {
        const accessToken = jwt.sign({
            user: {
                username: user.name,
                id: user.id
            }
        }, process.env.jwtprivatekey,
            {
                expiresIn: "15m"
            });
        res.status(200).json({ accessToken });
    } else {
        res.status(400);
        throw new Error("password is not valid");
    }
});

const getUser = expressAsyncHandler(async (req, res) => {
    res.json({
        name: "hurrah"
    })
})

module.exports = {
    userLogin,
    getUser
}