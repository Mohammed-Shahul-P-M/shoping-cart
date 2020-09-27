const db = require('../connection')
const collection = require('../collection')

module.exports = {
    addProduct: (product, callback) => {
        db.get().collection('products').insertOne(product).then((data) => {
            callback(data.ops[0]._id)
        })
    },
    getAllProduct: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }
}