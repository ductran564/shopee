const express = require('express')
const route = require('.')
const router = express.Router()
const HomeController = require('../app/controller/HomeController')

router.get('/',HomeController.index)

module.exports = router