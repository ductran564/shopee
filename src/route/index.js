const homeRoute = require('./home')
const buyerRoute = require('./buyer')

module.exports = function route (app) {
    app.use('/',homeRoute)
    app.use('/buyer',buyerRoute)
}