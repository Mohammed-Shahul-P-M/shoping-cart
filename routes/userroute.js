var express = require('express');
var router = express.Router();
var src = require('./imag')
let products = [
  {
    name: 'paripp',
    price: 88,
    img: src
  },
  {
    name: 'cherupayar - 1',
    price: 128,
    img: src
  },
  {
    name: 'cherupayar - 2',
    price: 108,
    img: src
  },
  {
    name: 'കടല',
    price: 76,
    img: src
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { products, admin: false });
});

module.exports = router;
