const Account = require('../models/Account')
const {mongooseToObject} = require('../../until/mongooses')
class BuyerController {
    //[GET] /buyer/singin
    singin(req, res,next) {
        res.render('singin')
    }

    //[POST] /buyer/singin
    postSingin(req, res,next) {
        const accounts = new Account(req.body)
        accounts.save()
            .then(res.redirect('/'))
            .catch(res.json('đăng ký thất bại'))
    }

    //[GET] /buyer/login
    login(req, res,next) {
        res.render('login')
    }

    //[POST] /buyer/login
    postLogin(req, res,next) {
        var phone = req.body.phone
        var password = req.body.password
        Account.findOne({
            phone: phone,
            password: password
        })
            .then(data => {
                if (data) {
                    return res.render('home', {account: mongooseToObject(data)})
                } else {
                    res.json('đăng nhập thất bại')
                }
            })
            .catch(next)
    }
}

module.exports = new BuyerController