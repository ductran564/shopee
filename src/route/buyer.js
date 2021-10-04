const express = require('express')
const route = require('.')
const router = express.Router()
const BuyerController = require('../app/controller/BuyerController')

router.get('/singin',BuyerController.singin)
router.post('/singin',BuyerController.postSingin)
router.get('/login',BuyerController.login)
router.post('/login',BuyerController.postLogin)

module.exports = router