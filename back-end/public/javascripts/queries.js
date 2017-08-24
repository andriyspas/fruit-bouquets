var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var request = require('request');
var connectionString = 'postgres://postgres:qwer1234@localhost:5432/bouquets_of_fruits';
var db = pgp(connectionString);

module.exports = {
    getAllComments: getAllComments,
    createComment: createComment,
    captchaVerification: captchaVerification
};

function getAllComments(req, res, next) {
    db.any('select * from reviews')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL comments'
                })
        })
        .catch(function (err) {
            return next(err);
        })
}

function createComment(req, res, next) {
    verifyCaptcha(req, function (success) {
        if (success) {
            db.none('insert into reviews(name, city, date_post, message)' + ' ' + 'values(${name}, ${city}, ${date_post}, ${message})',
                req.body)
                .then(function () {
                    res.status(200)
                        .json({
                            status: 'success',
                            message: 'Inserted one review'
                        })
                })
                .catch(function (err) {
                    return next(err);
                })
        }
        else {
            res.status(400)
                .json({
                    status: 'error',
                    message: 'Captcha is invalid'
                })
        }
    });
}

function verifyCaptcha(req, callback) {
    if (req.body['recaptcha'] === undefined || req.body['recaptcha'] === '' || req.body['recaptcha'] === null) {
        callback(false);
        return;
    }

    var secretKey = '6LePfiwUAAAAAM1Iv_pV1zJpCif5bTmx6V1niFfn';
    var verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secretKey + '&response=' + req.body['recaptcha'];
    request(verificationUrl, function (error, response, body) {
        body = JSON.parse(body);
        callback(body.success);
    })
}

function captchaVerification(req, res) {
    verifyCaptcha(req, function (success) {
        res.json({success: success});
    })
}