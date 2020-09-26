const db = require('../connection')
module.exports = {
    addProduct: (product, callback) => {
        db.get().collection('products').insertOne(product).then((data) => {
            callback(data.ops[0]._id)
        })
    }
}