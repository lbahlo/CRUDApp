
// export interface IProduct {
//   productName: string;
//   productDescription: string;
//   productPrice: number;
// }

// export default class Product {
//   ProductName: string;
//   ProductDescription: string;
//   ProductPrice: number;
// }

const filename = '../data/products.json'
let products = require(filename)
const helper = require('../helper.js')
function getProducts() {
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject({
                message: 'no products available',
                status: 202
            })
        }
        resolve(products)
    })
}
function getProduct(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(products, id)
        .then(product => resolve(product))
        .catch(err => reject(err))
    })
}
function addProduct(newProduct) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(products) }
        const date = { 
            createdAt: helper.newDate(),
            updatedAt: helper.newDate()
        } 
        addProduct = { ...id, ...newProdcut }
        products.push(newProduct)
        helper.writeJSONFile(filename, products)
        resolve(newProduct)
    })
}

function updateProduct(id, product) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(proudcts, id)
        .then(product => {
            const index = products.findIndex(p => p.id == product.id)
            id = { id: product.id }
            const date = {
                createdAt: post.createdAt,
                updatedAt: helper.newDate()
            } 
            products[index] = { ...id, ...product }
            helper.writeJSONFile(filename, products)
            resolve(products[index])
        })
        .catch(err => reject(err))
    })
}

function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(products, id)
        .then(() => {
            products = products.filter(p => p.id !== id)
            helper.writeJSONFile(filename, products)
            resolve()
        })
        .catch(err => reject(err))
    })
}

module.exports = {
    addProduct,
    getProducts,
    getProduct, 
    updateProduct,
    deleteProduct
}