module.exports = app => {
    app.use('/auth', require('./auth'))
    app.use('/users', require('./users'))
}