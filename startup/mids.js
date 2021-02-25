const express = require('express');
module.exports = app => {
    app.use(express.json());
    app.use(require('../middlewares/authMid'));
}