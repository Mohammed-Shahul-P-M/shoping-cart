var express = require('express');
var router = express.Router();
const productHelper = require('../config/helpers/product-helpers')

/* GET home page. */
router.get('/', function (req, res, next) {
  productHelper.getAllProduct().then(products => {
    res.render('index', { products, admin: false });
  })

});

module.exports = router;
