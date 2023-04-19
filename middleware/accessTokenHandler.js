const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = expressAsyncHandler(async (req, res, next) => {
    let token;
    let authToken = req.headers.authorization || req.headers.Authorization;
    if (authToken && authToken.startsWith("Bearer")) {
        token = authToken.split(" ")[1];
        if (!token) {
            res.status(401);
            throw new Error("Token is not authorised")
        }
        jwt.verify(token, process.env.jwtprivatekey, (err, decoded) => {
            if (err) {
                res.status(400);
                throw new Error("user is not authorised");
            }
            req.user = decoded.user;
            next();
        })
    } else {
        res.status(400);
        throw new Error("auth token required");
    }
})

module.exports = validateToken;