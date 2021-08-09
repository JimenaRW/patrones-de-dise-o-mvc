const express = require('express');
var router = express.Router();

let {index, about} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
router.get('/about', about);

module.exports = router;