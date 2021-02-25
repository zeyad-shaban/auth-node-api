const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = authMid = (req, res, next) => {
    const authToken = req.header('x-auth-token');

    if (!authToken) return res.status(401).send("Auth Token not found");

    try {
        const user = jwt.verify(authToken, config.SECRET_KEY);
        req.user = user
    } catch (err) {
        return res.status(403).send("Invalid token");
    }

    next();
};