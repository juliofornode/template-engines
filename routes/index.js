var express = require('express');
var myController = require('../controllers/myController.js');
var myRouter = express.Router();

myRouter.route('/')
    .get(function(req, res) {
        return myController.index(req, res);
    });


myRouter.route('/jade')
    .get(function(req, res) {
        return myController.indexJade(req, res);
    });

module.exports = myRouter;