const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const router = express.Router();
const users = require('../data/fakeUsers');


router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send("Username or password not found");

    const user = users.filter(u => u.username === username)[0];
    if (!user) return res.status(404).send("No such user found");

    if (user.password !== password) return res.status(400).send("Wrong password");

    const authToken = jwt.sign({username}, config.SECRET_KEY)

    return res.send(authToken);
});



module.exports = router;