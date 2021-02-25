const express = require('express');
const router = express.Router();

const authMid = require('../middlewares/authMId');
const users = require('../data/fakeUsers');


router.get('/', authMid, (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    return res.send('Creating User...');
});



module.exports = router;