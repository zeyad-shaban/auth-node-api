module.exports = app => {
    app.use('/api/auth', require('./auth'))
    app.use('/api/users', require('./users'))
}