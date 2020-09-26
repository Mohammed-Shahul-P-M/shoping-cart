var express = require('express');
var router = express.Router();
let src = require('./imag')
const productHelper = require('../config/helpers/product-helpers')
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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/view-products', { products, admin: true })
});

router.get('/add-product', (req, res) => {
  res.render('admin/add-products')
})

router.post('/add-product', (req, res) => {
  productHelper.addProduct(req.body, (id) => {
    const image = req.files.Image
    image.mv('./public/product-image/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-products')
      } else {
        console.log(err);
      }
    })

  })
})

module.exports = router;
