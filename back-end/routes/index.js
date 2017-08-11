/* GET home page. */
var express = require('express');
var router = express.Router();

var db = require('../public/javascripts/queries');


router.get('/api/reviews', db.getAllComments);
router.post('/api/reviews', db.createComment);
router.post('/api/captcha', db.captchaVerification);

module.exports = router;
